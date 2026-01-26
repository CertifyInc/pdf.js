import { Test } from "import-name";
import { Test2 } from './non-alias';
export { Test3 } from "import-name";
<<<<<<< HEAD
await import(/*webpackIgnore: true*/"./non-alias");
=======
await import(
/*webpackIgnore: true*/
/*@vite-ignore*/
"./non-alias");
>>>>>>> upstream/master
