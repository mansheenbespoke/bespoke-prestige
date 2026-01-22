import { CheckCircle2 } from "lucide-react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const features = [
  "Expert Insight: Comprehensive checks by experienced professionals",
  "Complete Transparency: Detailed report highlighting potential issues or hidden costs",
  "Save Money: Avoid costly repairs or risky purchases with informed decisions",
];

export function RacvSection() {
  return (
    _jsx("section", {
      id: "about",
      className: "py-24 bg-secondary/30",
      children: _jsx("div", {
        className: "container mx-auto px-4 lg:px-8",
        children: _jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
          children: [
            _jsxs("div", {
              className: "relative",
              children: [
                _jsx("div", {
                  className: "aspect-[4/3] rounded-2xl overflow-hidden",
                  children: _jsx("img", {
                    src: "/image.png",
                    alt: "Professional mechanic working on a car engine",
                    className: "w-full h-full"
                  })
                }),
                _jsxs("div", {
                  className: "absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-2xl hidden md:block",
                  children: [
                    _jsxs("div", {
                      className: "text-center",
                      children: [
                        _jsx("span", {
                          className: "text-large font-medium text-primary",
                          children: "KNOW"
                        }),
                        _jsx("p", {
                          className: "text-sm text-muted-foreground mt-1",
                          children: "BEFORE YOU BUY"
                        })
                      ]
                    })
                  ]
                }),
                _jsx("div", {
                  className: "absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary rounded-full hidden lg:block"
                })
              ]
            }),
            _jsxs("div", {
              children: [
                _jsx("span", {
                  className: "text-sm font-medium text-primary tracking-wider uppercase mb-4 block",
                  children: "We offer"
                }),
                _jsxs("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-6 text-balance",
                  children: [
                    "RACV Pre-Purchase  ",
                    " ",
                    _jsx("span", {
                      className: "text-primary",
                      children: "Vehicle Inspection "
                    })
                  ]
                }),
                _jsxs("div", {
                  className: "space-y-4 text-muted-foreground leading-relaxed mb-8",
                  children: [
                    _jsx("p", {
                      className: "text-lg font-medium text-foreground",
                      children: "Don't let hidden problems ruin your dream car purchase!"
                    }),
                    _jsxs("p", {
                      children: [
                        "Our RACV Pre-Purchase Inspection ensures you get the full picture of the car's condition before making a commitment. For just ",
                        _jsx("span", {
                          className: "text-primary font-semibold",
                          children: "$440"
                        }),
                        ", you'll gain:"
                      ]
                    })
                  ]
                }),
                _jsx("div", {
                  className: "grid sm:grid-cols-2 gap-3 mb-8",
                  children: features.map((feature) => (
                    _jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        _jsx(CheckCircle2, {
                          className: "w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        }),
                        _jsx("span", {
                          className: "text-sm text-foreground",
                          children: feature
                        })
                      ]
                    }, feature)
                  ))
                }),
                _jsx("div", {
                  className: "bg-primary/10 border border-primary/20 rounded-xl p-6",
                  children: _jsx("p", {
                    className: "text-foreground leading-relaxed",
                    children: "Act now and make your investment worry-free. Our trusted service guarantees you peace of mind and value for every dollar spent."
                  })
                })
              ]
            })
          ]
        })
      })
    })
  );
}
