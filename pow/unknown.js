

const P = "POW_TIMEOUT";
const f = p => {
  return {
    type: p,
    data: {}
  };
};
const s = {
  K: "start",
  U: "cancel"
};
const G = {
  ERROR: "error",
  DONE: "done",
  LOADED: "loaded"
};
class V {
  startTime = 0;
  endTime = 0;
  j = 0;
  t;
  constructor() {
    if (typeof performance !== "undefined") {
      this.t = () => performance.now();
    } else {
      this.t = Date.now;
    }
  }
  start() {
    this.startTime = this.t();
  }
  x() {
    this.endTime = this.t();
    this.j = this.endTime - this.startTime;
    return this.j;
  }
}
try {
  onmessage = async p => {
    const S = {
      qDdXG: function (m, O) {
        return m <= O;
      },
      iOURv: function (m, O) {
        return m - O;
      },
      UBCnT: function (m, O, w, W) {
        return m(O, w, W);
      },
      fMpbL: function (m, O) {
        return m === O;
      },
      IXvmo: function (m, O) {
        return m >= O;
      },
      nSLaa: function (m, O) {
        return m <= O;
      },
      ldSUv: "POW_TIMEOUT",
      dWeEf: function (m, O) {
        return m(O);
      },
      JLpfS: function (m, O) {
        return m === O;
      },
      OVxBO: function (m, O) {
        return m(O);
      },
      Pwzos: function (m, O) {
        return m !== O;
      },
      CmHxe: "XdyRF",
      pXuuz: "nEOBh",
      mbBeI: "No Valid Message type"
    };
    let r = p.data;
    switch (r.type) {
      case s.U:
        {
          if (S.Pwzos(S.CmHxe, "zUcTg")) {
            break;
          } else {
            const O = W.charCodeAt(0);
            if (O >= 97 && S.qDdXG(O, 122)) {
              return i.fromCharCode(e[S.iOURv(O, 97)]);
            }
            if (O >= 65 && O <= 90) {
              return E.fromCharCode(T[O - 39]);
            }
            return k;
          }
        }
      case s.K:
        {
          try {
            const seed = r.data;
            const O = await async function () {
              const W = {
                SkBSF: function (a, Q) {
                  return a !== Q;
                },
                iQASc: "AGuwl",
                uSpby: function (a, Q) {
                  return a + Q;
                },
                cTFJe: function (a, y, Q) {
                  return a(y, Q);
                },
                Xalao: function (a, Q) {
                  return a / Q;
                },
                PPiWP: function (a, Q) {
                  return a >= Q;
                }
              };
              let v = 0;
              function b(a) {
                const y = new Uint16Array(a.length);
                for (let Q = 0; Q < y.length; Q++) {
                  y[Q] = a.charCodeAt(Q);
                }
                return btoa(String.fromCharCode(...new Uint8Array(y.buffer)));
              }
              async function J(seed, difficulty, timeout) {
                const a = {
                  GjTRo: "TPuJZ",
                  lZqnd: function (y, Q, Z, D) {
                    return S.UBCnT(y, Q, Z, D);
                  }
                };
                return new Promise(async (y, Q) => {
                  if (a.GjTRo !== "TPuJZ") {
                    return S - 65;
                  } else {
                    try {
                      const timer = new V();
                      timer.start();
                      const D = b(JSON.stringify(seed));
                      let X = await a.lZqnd(k, D, difficulty, timeout);
                      y(X);
                    } catch (h) {
                      Q(h);
                    }
                  }
                });
              }
              function Y(a, difficulty) {
                return S.fMpbL(a.substring(0, difficulty), "0".repeat(difficulty));
              }
              async function k(seed, difficulty, timeout) {
                if (W.SkBSF("LTLXH", "LTLXH")) {
                  O[w] = W[v].toString();
                } else {
                  let y = 0;
                  let Q;
                  Q = sha512;
                  const timer = new V();
                  timer.start();
                  while (true) {
                    if (W.iQASc === "cdbVB") {
                      throw new r(m);
                    } else {
                      const D = Math.random().toString(36).substr(2, 15);
                      const X = await Q(W.uSpby(seed, D));
                      y++;
                      v++;
                      const h = W.cTFJe(Y, X, difficulty);
                      if (h) {
                        const z = timer.x();
                        const B = W.Xalao(y, z);
                        return {
                          L: y,
                          result: D,
                          C: Math.round(z),
                          hashRateInternal: B
                        };
                      }
                      if (W.PPiWP(timer.x(), timeout)) {
                        throw new Error(i);
                      }
                    }
                  }
                }
              }
              const i = S.ldSUv;
              async function e(answers) {
                const a = {
                  aPVIc: "DfjJJ",
                  PGCsD: "BNnNC",
                  GmnFP: function (D, X) {
                    return D !== X;
                  },
                  jtZju: function (D, X) {
                    return D !== X;
                  },
                  FefVo: function (D, X) {
                    return D / X;
                  },
                  yhpEh: function (D, X) {
                    return S.IXvmo(D, X);
                  },
                  qNawd: function (D, X) {
                    return S.iOURv(D, X);
                  },
                  QByBP: function (D, X) {
                    return S.nSLaa(D, X);
                  }
                };
                let y = answers;
                y = y.map(answer => {
                  if (a.PGCsD !== "qImvb") {
                    const X = answer;
                    Object.keys(answer).forEach(h => {
                      if (a.aPVIc === "zVKGn") {
                        return m.fromCharCode(O[w - 39]);
                      } else {
                        const q = answer[h];
                        const c = q.split("").map(o => {
                          const H = o.charCodeAt(0) + 4;
                          if (H > 126) {
                            return H - 65;
                          }
                          return H;
                        });
                        X[h] = c.map(o => String.fromCharCode(o)).join("");
                      }
                    });
                    return X;
                  } else {
                    const z = timer.x();
                    const B = O / z;
                    return {
                      L: w,
                      result: W,
                      C: v.round(z),
                      hashRateInternal: B
                    };
                  }
                });
                y = y.map(D => {
                  if (a.GmnFP("wXTiK", "EWMAC")) {
                    const h = D;
                    Object.keys(D).forEach(z => {
                      const B = D[z];
                      const q = Math.floor(B.length / 2);
                      const c = B.slice(0, q);
                      const o = B.slice(q, B.length);
                      h[z] = o + c;
                    });
                    return h;
                  } else if (typeof m !== "undefined") {
                    this.t = () => v.now();
                  } else {
                    this.t = v.now;
                  }
                });
                y = y.map(D => {
                  const X = D;
                  Object.keys(D).forEach(h => {
                    if (a.jtZju("CQErl", "CQErl")) {
                      const c = w;
                      W.keys(v).forEach(o => {
                        const H = c[o];
                        const u = k.floor(H.length / 2);
                        const l = H.slice(0, u);
                        const A = H.slice(u, H.length);
                        c[o] = A + l;
                      });
                      return c;
                    } else {
                      const q = D[h];
                      const c = Math.floor(a.FefVo(q.length, 2));
                      const o = q.slice(0, c);
                      const H = q.slice(c, q.length);
                      X[h] = H + o;
                    }
                  });
                  return X;
                });
                var Q = [78, 42, 17, 91, 3, 69, 58, 72, 29, 55, 98, 84, 38, 87, 10, 51, 63, 6, 33, 12, 40, 2, 75, 25, 95, 50, 61, 68, 37, 15, 14, 99, 44, 53, 13, 93, 92, 36, 59, 9, 19, 8, 35, 28, 54, 56, 43, 22, 66, 97, 41, 39];
                function Z(D) {
                  const X = D.charCodeAt(0);
                  if (a.yhpEh(X, 97) && X <= 122) {
                    return String.fromCharCode(Q[a.qNawd(X, 97)]);
                  }
                  if (X >= 65 && a.QByBP(X, 90)) {
                    return String.fromCharCode(Q[X - 39]);
                  }
                  return D;
                }
                y = y.map(D => {
                  const X = D;
                  Object.keys(D).forEach(h => {
                    const z = D[h];
                    const B = z.split("");
                    const q = B.map(Z).map(Z).map(Z);
                    X[h] = q.join("");
                  });
                  return X;
                });
                return y;
              }
              async function E(a) {
                const y = a.map(Z => {
                  const D = Z;
                  Object.keys(Z).forEach(X => {
                    D[X] = Z[X].toString();
                  });
                  return D;
                });
                let Q = await e(y);
                Q = Q.map(answer => {
                  const ianswer = answer;
                  Object.keys(answer).forEach(Z => {
                    let D = ianswer[Z];
                    D = D;
                    ianswer[Z] = D;
                  });
                  return ianswer;
                });
                return Q;
              }
              const answer = seed.seed;
              const T = seed.difficulty;
              const timeout = seed.itimeout;
              let F = await S.dWeEf(E, answer);
              const N = await J(F, T, timeout);
              const g = await E([...F, {
                [N.result]: N.result
              }]);
              return {
                hashRate: N.hashRateInternal,
                finalTransform: g,
                nonce: N.result,
                iterations: N.L,
                time: N.C
              };
            }();
            let w = f(G.DONE);
            w.data = O;
            postMessage(w);
          } catch (W) {
            let v = f(G.ERROR);
            let b = "";
            if ("message" in W) {
              b = W.message;
            }
            if (b === P) {
              if (S.pXuuz !== "nEOBh") {
                return S.JLpfS(S.substring(0, difficulty), "0".repeat(difficulty));
              } else {
                v.data = {
                  error: {
                    data: {
                      hashRate: W.hashRate
                    },
                    type: "work_timeout",
                    message: "Timed out inside worker"
                  }
                };
              }
            } else {
              v.data = {
                error: {
                  data: b,
                  trace: W.stack,
                  type: "runtime_error",
                  message: "Error when processing proof of work"
                }
              };
            }
            postMessage(v);
          }
          break;
        }
      default:
        {
          let k = S.dWeEf(f, G.ERROR);
          k.data = {
            error: S.mbBeI
          };
          S.OVxBO(postMessage, k);
        }
    }
  };
  const n = f(G.LOADED);
  postMessage(n);
} catch (p0) {
  let p1 = f(G.ERROR);
  p1.data = {
    error: {
      type: "runtime_error",
      data: p0,
      message: "Unknown error"
    }
  };
  postMessage(p1);
}
const sha512 = function () {
  function getWebkitSubtle() {
    if (!!crypto && "webkitSubtle" in crypto) {
      return crypto.webkitSubtle;
    } else {
      return null;
    }
  }
  function getSubtle() {
    return !!crypto && crypto.subtle || getWebkitSubtle();
  }
  return async function hashStandard(data) {
    const msgBuffer = new TextEncoder().encode(data);
    const subtle = getSubtle();
    const hashBuffer = await subtle.digest("SHA-512", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  };
}();
