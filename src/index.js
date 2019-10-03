import React from "react";
import ReactDOM from "react-dom";

import { ToastProvider, useToasts } from "./toast-manager";

import "./styles.css";

function Demo() {
  const { add } = useToasts();
  return <button onClick={() => add("Click to dismiss!")}>Add toast</button>;
}

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <h1>Toasts with Context Hooks</h1>

        <p>
          <Demo />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          facilisis at libero eu porttitor. Nunc aliquam porta magna non
          efficitur. Morbi porttitor lorem urna, ac bibendum lectus tincidunt
          sed. Nunc ut volutpat augue. Donec viverra sodales est vel accumsan.
          Donec facilisis nisl tincidunt ante maximus volutpat. Donec non
          tristique turpis, non vehicula odio.
        </p>

        <p>
          Phasellus eget neque sagittis ante ultrices dapibus. Sed ut lacus
          odio. Donec scelerisque lacus metus, non tristique quam finibus sed.
          Nam commodo felis a ex lobortis facilisis. Sed a commodo mauris, eget
          convallis orci. Vivamus convallis nec quam et consequat. Donec sed
          magna vehicula elit consectetur dignissim. Ut turpis justo,
          sollicitudin ut turpis vel, dictum ullamcorper ipsum. Mauris blandit
          magna sit amet velit luctus dapibus. Pellentesque tincidunt eros
          ultricies, commodo odio ac, ullamcorper risus. Nam pretium vehicula
          tortor, ut viverra lacus tincidunt quis. In blandit mattis nulla, eu
          dignissim ligula molestie eu. Mauris pretium sodales ipsum sit amet
          maximus.
        </p>

        <p>
          Fusce mollis libero et libero volutpat lacinia. Pellentesque commodo
          tortor nec imperdiet gravida. Vivamus non volutpat mi. Aliquam erat
          volutpat. Nam ullamcorper volutpat tellus in facilisis. Etiam interdum
          risus sed laoreet euismod. Donec consectetur mauris ut sem auctor
          suscipit. Praesent ultricies venenatis nunc, nec commodo dolor
          vestibulum id. Vivamus scelerisque sit amet est sit amet fermentum.
          Maecenas finibus consectetur eros, a viverra ligula sollicitudin et.
          Cras porttitor nisi non libero molestie rutrum. Vivamus ullamcorper,
          metus at molestie tempus, dui tortor sodales ex, id congue ante ligula
          sed velit. Praesent ut pulvinar mi.
        </p>

        <p>
          Nulla efficitur non odio eu auctor. Aenean pellentesque a arcu eget
          ultricies. Sed aliquet fringilla odio ut mollis. Mauris in risus
          hendrerit, feugiat mi sit amet, porttitor orci. In sit amet erat
          magna. Vestibulum dictum, augue ut faucibus tincidunt, mauris ex
          congue lacus, vel ornare ante magna ac libero. Donec convallis laoreet
          leo, ut pretium nunc lacinia suscipit. Nam consequat, arcu sit amet
          ornare vulputate, lorem velit fringilla tortor, ac sollicitudin nulla
          velit quis velit. Vestibulum euismod rutrum eros et ultrices. Duis
          eget pulvinar nunc. Aliquam erat volutpat.
        </p>

        <p>
          Ut id nisi in purus commodo iaculis at eu nulla. Vestibulum vel diam
          est. Etiam nec elementum mi, eu porttitor enim. Aenean nibh leo,
          vehicula nec ultricies sit amet, pretium at risus. Quisque a augue
          nulla. In nec sollicitudin dui. Aenean id vulputate erat, quis lacinia
          felis. Praesent quis felis imperdiet, sagittis ligula sed, vehicula
          felis. Integer hendrerit eros eu arcu tempus, non tempus dui
          ultricies. In bibendum massa in diam molestie consequat. Cras vel
          pretium velit. Integer rhoncus laoreet sem. Morbi vitae sapien tellus.
          Proin libero nunc, auctor ac orci sed, pharetra consectetur nisl.
        </p>
      </ToastProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
