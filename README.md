add this as a dependecy in place of threejs:
"three": "https://github.com/twindom3d/three.js/archive/master.tar.gz"

then run npm install, then after that's done (it will take ages) add this to the available scripts:
"postinstall": "cd ./node_modules/three && npm install && npm run build"

and run it with:   npm run postinstall

this process is just a slight variation from this guide: https://blaipratdesaba.com/how-to-use-an-npm-node-module-that-has-been-forked-b7dd522fdd08
