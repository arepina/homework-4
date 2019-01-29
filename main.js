function sleep(ms) {
   return new Promise(res => setTimeout(res, ms));
}

async function task1() {
   var max = 0;
   var maxEl = document;

   function element_list(el, depth) {
      //console.log(el + ' ' + depth);
      if (depth > max) {
         max = depth;
         maxEl = el;
      }
      for (var i = 0; i < el.children.length; i++) {
         element_list(el.children[i], depth + 1);
      }
   }

   function print() {
      console.log(max, maxEl);
      var block = document.getElementsByClassName("blockName")[0];
      block.innerText = max + " " + maxEl;
      maxEl = maxEl.parentElement;
      max--;
   }

   element_list(document, 0);
   while (maxEl != null) {
      print();
      await sleep(1000);
   }
}

task1();
