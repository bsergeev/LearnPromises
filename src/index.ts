// 1. variables of function types
const f1 = () => { console.log("I am f1"); };
const f2 = () => { console.log("I am f2"); };

// 2. "Higher order functions" - those taking functional parameters
const higherOrderF1 = (handler: () => void) => { handler(); };
const higherOrderF2 = (h1: () => void, h2?: () => void) => { 
    if (h2) {
        console.log("Invoking 2 handlers:"); 
        h1(); h2(); 
    } else {
        console.log("Invoking 1 handler:"); 
        h1(); 
    }
};

// 3. Promise
//const p = new Promise(executor: (resolve: (value?: unknown) => void, reject: (reason?: any) => void) => void)

//-----------------------------------------------------
// "main()" IIFE
(() => {
    higherOrderF1(f1);
    higherOrderF1(f2);

    higherOrderF2(f1, f2);
    higherOrderF2(f2, f1);
    higherOrderF2(f2);
})();