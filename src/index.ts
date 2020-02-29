
// 0. TypeScript deduces many types automatically:
// `let i = 13;` and `let i: number = 13;' are equivalent!

// 1. variables of function types
const f1 = () => { console.log("I am f1"); };
const f2 = () => { console.log("I am f2"); };

// 2. "Higher order functions" - those taking functional parameters
type SimpleFunction = () => void; // <- Type alias
const higherOrderF1 = (handler: SimpleFunction) => { handler(); };

// Two parameters, second optional (note `?` after `h2`)
const higherOrderF2 = (h1: SimpleFunction, h2?: SimpleFunction) => { 
    if (h2) {
        console.log("Invoking 2 handlers:"); 
        h1(); h2(); 
    } else {
        console.log("Invoking 1 handler:"); 
        h1(); 
    }
};

// 3. Classes
class SomeClass {
    // Member variables (later accessible as this.varName):
    private handler: () => void;
    // `name: string;` is another member variable implicitly declared in constructor via `public`

    constructor(handler: () => void, public name?: string) {
        this.handler = handler;
    }

    handle() { 
        this.handler(); 
        console.log("I am "+ (this.name? this.name : "unnamed") +" object");
    }
}

// 4. Promise - the class for handling async stuff
type ResolveHandler = (value?: any) => void;
type RejectHandler  = (error?: any) => void;
type Executor = (resolve: ResolveHandler, reject: RejectHandler) => void;
// Promise constructor signature: constructor(executor: Executor)

//-----------------------------------------------------
// "main()" IIFE
(() => {
    // 1. variables of function types
    const f3 = () => { console.log("I am f3"); };
    let f = f3;
   
    // 2. "Higher order functions"
    higherOrderF1(f1);
    higherOrderF1(f2);
    higherOrderF1(f);
    f = f1;
    higherOrderF1(f);

    higherOrderF2(f1, f2);
    higherOrderF2(f2, f1);
    higherOrderF2(f2);

    // 3. Classes
    let obj = new SomeClass(
        () => { console.log("\nI am handler"); }, // 1st argument
        "Goofy"                                   // 2nd argument
    );
    obj.handle();

    obj = new SomeClass(() => { console.log("\nI am another handler"); }); // only 1 argument
    obj.handle();

    obj.name = "Spooky";
    obj.handle();
    console.log("--------------\n");

    // 4. Promise
    const p = new Promise(
        (resolve: ResolveHandler, reject: RejectHandler) => {
            setTimeout(
                () => {
                    if (Math.random() > 0.5) { // 50/50 probability of either success or failure
                        resolve("Success");
                    } else {
                        reject(new Error("Failure"));
                    }
                }, 
                1000 + Math.random() * 2000 // wait 1...3 seconds
            );
        }
    );
    p.then((message: string) => { console.log("Promise resolved: "+ message); })
     .catch((error:  string) => { console.log("Promise rejeced: " + error); });
     
    console.log("Finished synchronous code");
})();