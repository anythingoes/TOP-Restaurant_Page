(() => {
  "use strict";
  console.log("I am ready to run"),
    document.querySelector("#content").appendChild(
      (function () {
        const e = document.createElement("header"),
          t = document.createElement("h1"),
          n = document.createElement("nav"),
          o = document.createElement("ul"),
          c = ["Home", "Menu", "About"];
        t.textContent = "Peco's Restaurant";
        for (let e = 0; e < 3; e++) {
          const t = document.createElement("li");
          (t.textContent = c[e]), o.appendChild(t);
        }
        return (
          n.appendChild(o),
          e.appendChild(t),
          e.appendChild(n),
          console.log(o),
          e
        );
      })()
    );
})();
