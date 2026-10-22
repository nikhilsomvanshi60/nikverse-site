import{j as e}from"./markdown-C39NRkcp.js";
import{d as w,u as y,b as n}from"./react-vendor-D8Mxo6-i.js";
import{u as h,a as N,S as u,s as k}from"./index-yr7RATzZ.js";
import"./supabase-CU-G9Hxl.js";

function S({onInstall:a,onSkip:l,deferredPrompt:t}){
  const [copied, setCopied] = n.useState(false);
  const handleInstallClick = async () => {
    if (t) {
      try {
        t.prompt();
        await t.userChoice;
      } catch(e) {}
    }
    a();
  };

  return e.jsx("div",{
    className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md animate-in fade-in duration-200",
    children: e.jsxs("div",{
      className:"relative w-full max-w-sm overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0d0d12]/95 p-6 text-center shadow-2xl backdrop-blur-2xl ring-1 ring-cyan-500/20",
      children:[
        e.jsx("div",{"aria-hidden":!0,className:"absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[70px]"}),
        e.jsxs("div",{
          className:"relative z-10 flex flex-col items-center",
          children:[
            e.jsx("img",{
              src:"/logo.png",
              alt:"NIK Remote",
              className:"mb-4 h-20 w-20 object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-transform hover:scale-105"
            }),
            e.jsx("h2",{
              className:"mb-2 text-2xl font-bold tracking-tight text-white",
              children:"Install NIK Remote"
            }),
            e.jsx("p",{
              className:"mb-6 text-[14px] leading-relaxed text-white/70",
              children:"Add it to your home screen — one tap to call NIK on your PC."
            }),
            e.jsxs("div",{
              className:"flex w-full flex-col gap-3",
              children:[
                e.jsx("button",{
                  type:"button",
                  id:"install-app-btn",
                  onClick:handleInstallClick,
                  className:"flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 active:scale-[0.98]",
                  children: e.jsxs(e.Fragment,{
                    children:[
                      e.jsx("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),
                      e.jsx("span",{children:"Install App"})
                    ]
                  })
                }),
                e.jsx("button",{
                  type:"button",
                  id:"skip-install-btn",
                  onClick:l,
                  className:"flex h-11 w-full items-center justify-center rounded-xl text-sm font-medium text-white/60 transition-colors hover:text-white hover:bg-white/5 active:scale-[0.98]",
                  children:"Skip for now"
                })
              ]
            })
          ]
        })
      ]
    })
  });
}

function M(){
  const a=w(),l=y(),s=N(r=>r.status),{deferredPrompt:t,clearPrompt:f}=h();
  const [d,x]=n.useState(!1);
  const [p,m]=n.useState(null);
  const [b,i]=n.useState(!1);
  const [showTokenInput, setShowTokenInput]=n.useState(!1);
  const [tokenVal, setTokenVal]=n.useState("");
  const o=l.state?.from??"/";

  n.useEffect(()=>{
    s==="signedIn"&&a(o,{replace:!0});
  },[s,a,o]);

  async function c(){
    m(null),x(!0);
    try{
      await k(o);
    }catch(r){
      m(r instanceof Error?r.message:"Could not start sign-in."),x(!1);
    }
  }

  function g(){
    // When clicking login, ALWAYS show the Install prompt modal first!
    i(!0);
  }

  const j = async () => {
    if (t) {
      try {
        t.prompt();
        await t.userChoice;
        f();
      } catch(err) {}
    }
    i(!1);
    c();
  };

  const v = () => {
    i(!1);
    c();
  };

  const handleTokenConnect = (e) => {
    e.preventDefault();
    const clean = tokenVal.trim();
    if (!clean) return;
    try {
      window.location.hash = "#token=" + encodeURIComponent(clean);
      window.location.reload();
    } catch(err) {
      m("Invalid token: " + err.message);
    }
  };

  return s==="loading"||s==="signedIn"?e.jsx("div",{
    className:"flex h-full items-center justify-center bg-black",
    children:e.jsx(u,{className:"h-8 w-8 text-cyan-400 animate-spin"})
  }):e.jsxs("div",{
    className:"relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#000000] px-4 pb-safe pt-safe selection:bg-white/20",
    children:[
      b&&e.jsx(S,{onInstall:j,onSkip:v,deferredPrompt:t}),
      e.jsx("div",{
        className:"pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08)_0%,transparent_60%)] mix-blend-screen opacity-90"
      }),
      e.jsx("div",{
        className:"pointer-events-none absolute right-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_60%)] mix-blend-screen opacity-70"
      }),
      e.jsx("div",{
        "aria-hidden":!0,
        className:"pointer-events-none absolute inset-0 opacity-[0.3]",
        style:{
          backgroundImage:"radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize:"40px 40px, 90px 90px",
          backgroundPosition:"0 0, 20px 20px",
          WebkitMaskImage:"radial-gradient(ellipse at top, black 40%, transparent 90%)"
        }
      }),
      e.jsxs("div",{
        className:"relative z-10 w-full max-w-[420px]",
        children:[
          e.jsxs("div",{
            className:"flex flex-col items-center rounded-3xl border border-white/[0.08] bg-black/60 p-8 shadow-2xl backdrop-blur-2xl sm:p-10",
            children:[
              e.jsxs("div",{
                className:"relative mb-6 flex items-center justify-center",
                children:[
                  e.jsx("div",{className:"absolute inset-0 scale-[2.2] rounded-full bg-cyan-500/10 blur-xl"}),
                  e.jsx("img",{
                    src:"/logo.png",
                    alt:"NIK Logo",
                    className:"relative z-10 h-16 w-16 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  })
                ]
              }),
              e.jsx("h1",{
                className:"mb-2 text-[28px] font-semibold tracking-tight text-white/95",
                children:"NIK Remote"
              }),
              e.jsxs("p",{
                className:"mb-8 text-center text-[13px] leading-relaxed text-white/50",
                children:[
                  "Your phone becomes the mic and speaker",
                  e.jsx("br",{}),
                  "for NIK AI on your PC."
                ]
              }),
              e.jsx("button",{
                type:"button",
                id:"google-login-btn",
                onClick:g,
                disabled:d,
                className:"group relative flex h-[52px] w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/[0.1] bg-[#141416] font-medium text-white/95 shadow-md transition-all duration-200 hover:border-cyan-500/40 hover:bg-[#1a1a1f] active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50",
                children:d?e.jsxs(e.Fragment,{
                  children:[
                    e.jsx(u,{className:"h-4 w-4 text-white/50 animate-spin"}),
                    e.jsx("span",{className:"text-[14px]",children:"Connecting..."})
                  ]
                }):e.jsxs(e.Fragment,{
                  children:[
                    e.jsx(I,{}),
                    e.jsx("span",{className:"text-[15px] font-medium",children:"Continue with Google"})
                  ]
                })
              }),
              e.jsx("button",{
                type:"button",
                id:"quick-install-btn",
                onClick:()=>i(!0),
                className:"mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-[13px] font-medium text-cyan-400 transition-colors hover:bg-cyan-500/10 active:scale-[0.99]",
                children: e.jsxs(e.Fragment,{
                  children:[
                    e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v12m0 0l-3-3m3 3l3-3m-8 7h10"})}),
                    e.jsx("span",{children:"Install App to Home Screen"})
                  ]
                })
              }),
              p&&e.jsx("div",{
                className:"mt-5 w-full rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-[12px] text-red-400",
                children:p
              }),
              e.jsxs("div",{
                className:"mt-6 w-full border-t border-white/[0.06] pt-4 text-center",
                children:[
                  !showTokenInput?e.jsx("button",{
                    type:"button",
                    onClick:()=>setShowTokenInput(!0),
                    className:"text-[12px] text-white/40 hover:text-cyan-400 transition-colors",
                    children:"Or connect with Desktop Session Token"
                  }):e.jsxs("form",{
                    onSubmit:handleTokenConnect,
                    className:"flex flex-col gap-2 mt-2",
                    children:[
                      e.jsx("input",{
                        type:"password",
                        placeholder:"Paste Desktop Token or PIN",
                        value:tokenVal,
                        onChange:(ev)=>setTokenVal(ev.target.value),
                        className:"h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-[13px] text-white placeholder-white/30 focus:border-cyan-500 focus:outline-none"
                      }),
                      e.jsx("button",{
                        type:"submit",
                        className:"h-9 w-full rounded-lg bg-white/10 text-[12px] font-medium text-white hover:bg-white/20 transition-colors",
                        children:"Connect Directly"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          e.jsxs("p",{
            className:"mt-6 text-center text-[11px] leading-relaxed text-white/40",
            children:[
              e.jsx("span",{className:"font-medium text-white/60",children:"Important:"}),
              " Please sign in with the exact same",
              e.jsx("br",{}),
              "Google account you use on the NIK Desktop App."
            ]
          })
        ]
      })
    ]
  });
}

function I(){
  return e.jsxs("svg",{
    className:"h-5 w-5",
    viewBox:"0 0 24 24",
    "aria-hidden":!0,
    children:[
      e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"}),
      e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),
      e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"}),
      e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51Z"})
    ]
  });
}

export{M as default};
