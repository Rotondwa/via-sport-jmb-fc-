import { useEffect, useRef } from "react"

const TEXT = "Abazingeli"
const MAX_DPR = 2
const REF_WIDTH = 1200
const HANDLES = 3
const CELL_ASPECT = 0.6
const DRIFT_X = 0.08
const DRIFT_Y = 0.04
const DRIFT_RATE = 1.3
const DRIFT_RATE_Y = 1.3 * 1.3
const SWEEP_RATE = 0.5
const SWEEP_BAND = 0.28
const RESNAP = 0.2
const DAMP_REF = 20
const SPEED_REF = 50
const DOT_DIAMETER = 4 / 440
const DOT_PITCH = 12 / 440
const FONT = "Inter, Arial, sans-serif"

const VERT = `
  attribute vec2 aPos;
  varying vec2 vUv;
  void main() {
    vUv = aPos * 0.5 + 0.5;
    gl_Position = vec4(aPos, 0.0, 1.0);
  }`

const FRAG = `
  precision highp float;
  uniform sampler2D uMap;
  uniform vec2 uRes;
  uniform vec2 uAtlas;
  uniform vec2 uPtr;
  uniform float uReach;
  uniform vec3 uText;
  uniform vec3 uShade;
  uniform vec4 uAccent;
  uniform vec2 uV0;
  uniform vec2 uV1;
  uniform vec2 uV2;
  uniform float uHalf;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec2 blurRG(vec2 uv, float e) {
    vec4 sum = vec4(0.0);
    for (int i = 0; i < 6; i++) {
      float fi = float(i);
      float th = radians(fi / 6.0 * 360.0);
      vec2 dir = vec2(cos(th), sin(th));
      sum += texture2D(uMap, uv + dir * (hash(vec2(fi, uv.x + uv.y)) + e) * e);
    }
    return (sum / 6.0).rg;
  }
  vec2 segment(vec2 p, vec2 a, vec2 b) {
    vec2 ab = b - a;
    float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-8), 0.0, 1.0);
    return vec2(length((p - a) - ab * t), t);
  }
  float stroke(float d, float lw, float px) { return 1.0 - smoothstep(lw, lw + px, d); }
  float dashedLine(vec2 p, vec2 a, vec2 b, float lw, float px) {
    vec2 s = segment(p, a, b);
    return stroke(s.x, lw, px) * step(0.5, fract(s.y * length(b - a) * 100.0));
  }
  float boxEdge(vec2 p, vec2 c, float h, float lw, float px) {
    vec2 q = abs(p - c) - vec2(h);
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
    return stroke(abs(d), lw, px);
  }
  void main() {
    float aspect = uRes.x / uRes.y;
    vec2 E = (vUv * uRes - (uRes - uAtlas) * 0.5) / uAtlas;
    float inside = step(0.0, E.x) * step(E.x, 1.0) * step(0.0, E.y) * step(E.y, 1.0);
    vec2 safeUv = clamp(E, 0.0, 1.0);
    float b = clamp(1.0 - E.y * 3.5, 0.0, 1.0) * 0.008;
    vec2 soft = blurRG(safeUv, b);
    vec2 sharp = blurRG(safeUv, b * 0.1);
    float d = length((vUv - uPtr) / vec2(1.0, aspect));
    float k = 1.0 - pow(smoothstep(0.0, max(uReach, 1e-4), d), 3.0);
    float mask = mix(soft.r, sharp.g, k) * inside;
    vec3 fill = mix(uShade, uText, smoothstep(0.0, 1.0, E.y));
    vec2 P = vec2(vUv.x * aspect, vUv.y);
    float px = 1.0 / uRes.y;
    float lw = px * 0.2;
    float lines = max(max(dashedLine(P, uV0, uV1, lw, px), dashedLine(P, uV1, uV2, lw, px)), dashedLine(P, uV2, uV0, lw, px));
    float boxes = max(max(boxEdge(P, uV0, uHalf, lw, px), boxEdge(P, uV1, uHalf, lw, px)), boxEdge(P, uV2, uHalf, lw, px));
    float A = max(lines, boxes) * uAccent.a * (1.0 - vUv.y);
    vec4 card = vec4(fill * mask, mask);
    gl_FragColor = (vec4(uAccent.rgb * A, A) + card * (1.0 - A)) * pow(clamp(E.y, 0.0, 1.0), 0.7);
  }`

export function AbazingeliMark() {
  const stageRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    if (!stage || !canvas) return

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
    })
    if (!gl) return

    const program = createProgram(gl)
    const uniform = (name: string) => gl.getUniformLocation(program, name)
    const locations = {
      map: uniform("uMap"),
      res: uniform("uRes"),
      atlas: uniform("uAtlas"),
      ptr: uniform("uPtr"),
      reach: uniform("uReach"),
      text: uniform("uText"),
      shade: uniform("uShade"),
      accent: uniform("uAccent"),
      v0: uniform("uV0"),
      v1: uniform("uV1"),
      v2: uniform("uV2"),
      half: uniform("uHalf"),
    }
    const quad = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, quad)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

    const target = { x: -0.5, y: 0.5 }
    const eased = { x: -0.5, y: 0.5 }
    const cells = Array.from({ length: HANDLES }, () => ({ x: -0.5, y: 0.5 }))
    const verts = Array.from({ length: HANDLES }, () => ({ x: -0.5, y: 0.5 }))
    let boxW = 1
    let boxH = 1
    let pixelRatio = 1
    let atlasKey = ""
    let atlasRatioW = 1
    let atlasRatioH = 1
    let last = 0
    let sweepClock = 0
    let drift = 0
    let hasPointer = false
    let frame = 0

    const resize = () => {
      boxW = Math.max(1, stage.clientWidth)
      boxH = Math.max(1, stage.clientHeight)
      pixelRatio = Math.min(MAX_DPR, window.devicePixelRatio || 1)
      const width = Math.max(1, Math.round(boxW * pixelRatio))
      const height = Math.max(1, Math.round(boxH * pixelRatio))
      if (canvas.width === width && canvas.height === height) return
      canvas.width = width
      canvas.height = height
    }

    const rebuildAtlas = () => {
      const drawFont = Math.max(8, 200 * (boxW / REF_WIDTH))
      const atlas = buildAtlas(drawFont, pixelRatio)
      atlasRatioW = Math.max(0.0001, atlas.cssW / drawFont)
      atlasRatioH = Math.max(0.0001, atlas.cssH / drawFont)
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas.canvas)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
    }

    const snap = (x: number, y: number, cellW: number, cellH: number) => {
      const column = Math.floor(x / cellW)
      const row = Math.floor(y / cellH)
      const found: { x: number; y: number; d: number }[] = []
      for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
          const px = (column + i + 0.5) * cellW
          const py = (row + j + 0.5) * cellH
          found.push({ x: px, y: py, d: Math.hypot(px - x, py - y) })
        }
      }
      found.sort((a, b) => a.d - b.d)
      cells.forEach((cell, index) => {
        const point = found[index + 1]
        if (!point) return
        cell.x = point.x
        cell.y = point.y
      })
    }

    const step = (dt: number) => {
      const rate = 50 / SPEED_REF
      const cellW = Math.max(0.01, 27 / 100)
      const cellH = cellW * CELL_ASPECT
      const aspect = boxW / boxH
      if (!hasPointer) {
        const band = (atlasRatioH * Math.max(8, 200 * (boxW / REF_WIDTH))) / boxH
        target.x += dt * SWEEP_RATE * rate
        target.y = (1 - band) / 2 + SWEEP_BAND * band
        if (target.x > 1.5) {
          target.x = -0.5
          eased.x = -0.5
        }
        sweepClock += dt
        if (sweepClock >= RESNAP) {
          sweepClock = 0
          snap(target.x * aspect, target.y, cellW, cellH)
        }
      }
      if (hasPointer) snap(target.x * aspect, target.y, cellW, cellH)
      const damp = Math.min(1, Math.max(0, (60 / 100) * DAMP_REF * dt))
      eased.x += (target.x - eased.x) * damp
      eased.y += (target.y - eased.y) * damp
      drift += dt * rate
      cells.forEach((cell, index) => {
        const sx = Math.round(cell.x / cellW - 0.5)
        const sy = Math.round(cell.y / cellH - 0.5)
        const h1 = fract(Math.sin(sx * 127.1 + sy * 311.7) * 43758.5453)
        const h2 = fract(Math.sin(sx * 269.5 + sy * 183.3) * 43758.5453)
        const vertex = verts[index]
        if (!vertex) return
        vertex.x = cell.x + DRIFT_X * cellW * Math.sin(drift * DRIFT_RATE + h1 * Math.PI * 2)
        vertex.y = cell.y + DRIFT_Y * cellH * Math.sin(drift * DRIFT_RATE_Y + h2 * Math.PI * 2)
      })
    }

    const draw = () => {
      const drawFont = Math.max(8, 200 * (boxW / REF_WIDTH))
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.useProgram(program)
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.uniform1i(locations.map, 0)
      gl.uniform2f(locations.res, boxW, boxH)
      gl.uniform2f(locations.atlas, atlasRatioW * drawFont, atlasRatioH * drawFont)
      gl.uniform2f(locations.ptr, eased.x, eased.y)
      gl.uniform1f(locations.reach, 290 / boxW)
      gl.uniform3f(locations.text, 1, 1, 1)
      gl.uniform3f(locations.shade, 1, 1, 1)
      gl.uniform4f(locations.accent, 1, 1, 1, 1)
      gl.uniform2f(locations.v0, verts[0]?.x ?? 0, verts[0]?.y ?? 0)
      gl.uniform2f(locations.v1, verts[1]?.x ?? 0, verts[1]?.y ?? 0)
      gl.uniform2f(locations.v2, verts[2]?.x ?? 0, verts[2]?.y ?? 0)
      gl.uniform1f(locations.half, 109 / 2 / boxH)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    const tick = (now: number) => {
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0
      last = now
      resize()
      const key = `${pixelRatio}|${Math.ceil(Math.max(8, 200 * (boxW / REF_WIDTH)) / 64)}`
      if (key !== atlasKey) {
        atlasKey = key
        rebuildAtlas()
      }
      step(dt)
      draw()
      frame = requestAnimationFrame(tick)
    }

    const handleMove = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect()
      hasPointer = true
      target.x = (event.clientX - bounds.left) / bounds.width
      target.y = 1 - (event.clientY - bounds.top) / bounds.height
    }
    const handleLeave = () => {
      hasPointer = false
    }

    stage.addEventListener("pointermove", handleMove)
    stage.addEventListener("pointerleave", handleLeave)
    resize()
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      stage.removeEventListener("pointermove", handleMove)
      stage.removeEventListener("pointerleave", handleLeave)
    }
  }, [])

  return (
    <section
      id="abazingeli"
      ref={stageRef}
      className="relative min-h-[70vh] overflow-hidden bg-black"
      aria-label="Abazingeli"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </section>
  )
}

const fract = (value: number) => value - Math.floor(value)

const createProgram = (gl: WebGLRenderingContext) => {
  const program = gl.createProgram()
  if (!program) throw new Error("WebGL program missing")
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT))
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG))
  gl.bindAttribLocation(program, 0, "aPos")
  gl.linkProgram(program)
  return program
}

const compile = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)
  if (!shader) throw new Error("WebGL shader missing")
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

const buildAtlas = (drawFont: number, pixelRatio: number) => {
  let fontSize = Math.max(8, drawFont * pixelRatio)
  const measure = () => {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    if (!context) return { width: 1, ascent: fontSize * 0.8, descent: fontSize * 0.22 }
    context.font = `800 ${fontSize}px ${FONT}`
    const metrics = context.measureText(TEXT)
    return {
      width: Math.max(1, metrics.width),
      ascent: metrics.actualBoundingBoxAscent || fontSize * 0.8,
      descent: metrics.actualBoundingBoxDescent || fontSize * 0.22,
    }
  }
  let metrics = measure()
  let pad = fontSize * 0.12
  const over = Math.max((metrics.width + pad * 2) / 4096, (metrics.ascent + metrics.descent + pad * 2) / 4096)
  if (over > 1) {
    fontSize = Math.max(8, fontSize / over)
    metrics = measure()
    pad = fontSize * 0.12
  }
  const canvas = document.createElement("canvas")
  canvas.width = Math.max(1, Math.ceil(metrics.width + pad * 2))
  canvas.height = Math.max(1, Math.ceil(metrics.ascent + metrics.descent + pad * 2))
  const context = canvas.getContext("2d")
  if (!context) return { canvas, cssW: drawFont, cssH: drawFont }
  context.fillStyle = "#000"
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.font = `800 ${fontSize}px ${FONT}`
  context.textBaseline = "alphabetic"
  context.globalCompositeOperation = "lighter"
  context.fillStyle = "#f00"
  context.fillText(TEXT, pad, pad + metrics.ascent)
  const block = metrics.ascent + metrics.descent
  context.strokeStyle = "#0f0"
  context.lineCap = "round"
  context.lineJoin = "round"
  context.lineWidth = Math.max(1, block * DOT_DIAMETER)
  context.setLineDash([0, Math.max(2, block * DOT_PITCH)])
  context.strokeText(TEXT, pad, pad + metrics.ascent)
  return {
    canvas,
    cssW: canvas.width * (drawFont / fontSize),
    cssH: canvas.height * (drawFont / fontSize),
  }
}
