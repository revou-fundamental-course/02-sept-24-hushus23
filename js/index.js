function showSelectedOption() {
    var selectElement = document.getElementById("standard-select");
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    var resultDiv = document.getElementById("output");

    if (selectedValue === "Triangle-Perimeter") {
        resultDiv.innerHTML = `
            <div class="formula">
                <h5>Formula</h5>
                <div class="formula-bar">
                    <img src="https://cameramath.com/pmw/pic-triangle-perimeter.png" alt="">
                    <p>Perimeter = a+b+c</p> 
                </div>
            </div>
            <div class="calculator-bar"> 
            <h5>Triangle Perimeter Calculator</h5>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">a</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="sideA" name="sideA" placeholder="a"><
                        </div>
                    </div>
                </div>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">b</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="sideB" name="sideB" placeholder="b">
                        </div>
                    </div>
                </div>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">c</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="sideC" name="sideC" placeholder="c">
                        </div>
                    </div>
                </div>
                <button class="result-button" onclick="calculateTrianglePerimeter()">Calculate</button>
                </div>
                <div class="result-bar">
                    <div id="perimeterResult"></div>
                </div>
            </div>
        `;
    } else if (selectedValue === "Triangle-Area") {
        resultDiv.innerHTML = `
            <div class="formula">
                <h5>Formula</h5>
                <div class="formula-bar">
                    <img src="https://cameramath.com/pmw/pic-triangle-area.png" alt="">
                    <p>Area= 1/2 x h x b</p> 
                </div>
            </div>
            <div class="calculator-bar"> 
            <h5>Triangle Area Calculator</h5>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">b</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="base" name="base" placeholder="base"><
                        </div>
                    </div>
                </div>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">h</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="height" name="height" placeholder="height">
                        </div>
                    </div>
                </div>
                <button class="result-button" onclick="calculateTriangleArea()">Calculate</button>
                </div>
                <div class="result-bar">
                    <div id="areaResult"></div>
                </div>
            </div>
        `;
    } else if (selectedValue === "Parallelogram-Perimeter") {
        resultDiv.innerHTML = `
             <div class="formula">
                <h5>Formula</h5>
                <div class="formula-bar">
                    <img src="https://cameramath.com/pmw/pic-parallelogram-perimeter.png" alt="">
                    <p>Perimeter = 2a + 2b</p> 
                </div>
            </div>
            <div class="calculator-bar"> 
            <h5>Parallelogram Perimeter Calculator</h5>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">a</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="sideA" name="sideA" placeholder="a"><
                        </div>
                    </div>
                </div>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">b</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="sideB" name="sideB" placeholder="b">
                        </div>
                    </div>
                </div>
                <button class="result-button" onclick="calculateParallelogramPerimeter()">Calculate</button>
                </div>
                <div class="result-bar">
                    <div id="perimeterResult"></div>
                </div>
            </div>
        `;
    } else if (selectedValue === "Parallelogram-Area") {
        resultDiv.innerHTML = `
            <div class="formula">
                <h5>Formula</h5>
                <div class="formula-bar">
                    <img src="https://cameramath.com/pmw/pic-parallelogram-area.png" alt="">
                    <p> Area =  b × h </p> 
                </div>
            </div>
            <div class="calculator-bar"> 
            <h5>Parallelogram Area Calculator</h5>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">b</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="base" name="base" placeholder="base"><
                        </div>
                    </div>
                </div>
                <div class="p form-group">
                    <div class="wrapper">
                        <div class="prefix">h</div>
                        <span class="suffix">cm</span>
                        <div class="input-wrapper">
                        <input type="number" id="height" name="height" placeholder="height">
                        </div>
                    </div>
                </div>
                <button class="result-button" onclick="calculateParallelogramArea()">Calculate</button>
                </div>
                <div class="result-bar">
                    <div id="areaResult"></div>
                </div>
            </div>
        `;
    }
}

function calculateTrianglePerimeter() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        document.getElementById("perimeterResult").innerHTML = "Please enter valid numbers for all sides.";
        return;
    }

    var perimeter = sideA + sideB + sideC;
    document.getElementById("perimeterResult").innerHTML = `<h5>Result</h5> <p>Perimeter</p> = ${sideA} + ${sideB} + ${sideC} </br> = ${perimeter} cm&sup2`;
}

function calculateTriangleArea() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var area = 0.5 * base * height;
    document.getElementById("areaResult").innerHTML = `<h5>Result</h5> <p>Area</p> = 1/2 x ${base} x ${height} </br> = ${area} cm&sup3`;
}

function calculateParallelogramPerimeter() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    
    if (isNaN(sideA) || isNaN(sideB)) {
        document.getElementById("perimeterResult").innerHTML = "Please enter valid numbers for all sides.";
        return;
    }

    var perimeter = 2 * sideA + 2 * sideB;
    document.getElementById("perimeterResult").innerHTML = `<h5>Result</h5> <p>Perimeter</p> = 2 x ${sideA} + 2 x ${sideB} </br> = ${perimeter} cm&sup2`;
}

function calculateParallelogramArea() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var area = base * height;
    document.getElementById("areaResult").innerHTML = `<h5>Result</h5> <p>Area</p> = ${base} x ${height} </br> = ${area} cm&sup3`;
}
