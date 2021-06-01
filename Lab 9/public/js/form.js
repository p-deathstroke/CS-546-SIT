(function () {
    function fibonacci(num) {
        if (typeof num !== "number" || num === undefined || num === null || num.length === 0) throw "Please Enter a Number"
        if (isNaN(num)) throw "Please provide a number"
        if (num <= 0) return 0
        if (num == 1) return 1;
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
    function checkPrime(num) {
        if (isNaN(num)) throw "Please provide a number";
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    const form = document.getElementById('fibo-form');


    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();
            const numberElement = document.getElementById('inputnum')
            try {

                const ul = document.getElementById("results");
                const li = document.createElement("li");
                const val = numberElement.value;
                const parsevalue = parseInt(val);

                const fibo = fibonacci(parsevalue)
                const prime = checkPrime(fibo)
                console.log(fibo, prime)

                if (prime) {
                    li.appendChild(document.createTextNode(`The Fibonacci of ${parsevalue} is ${fibo}. `));
                    li.setAttribute("class", "is-prime");
                } else {
                    li.appendChild(document.createTextNode(`The Fibonacci of ${parsevalue} is ${fibo}. `));
                    li.setAttribute("class", "not-prime");
                }
                ul.appendChild(li);
                numberElement.value = ""
            } catch (error) {
                const message = typeof error === 'string' ? error : error.message;
                if (message) {

                    numberElement.value = "";
                    alert(`${message}`);
                }



            }
        });
    }

})();