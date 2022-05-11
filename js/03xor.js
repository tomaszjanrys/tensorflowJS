async function xor(){
    //dane wejsciwe 
    const input = [[0,0],[1,0],[0,1],[1,1]]
    console.log(input.length)

    const inputTensor = tf.tensor(input)
    console.log(inputTensor)
//wyjscie
const output = [[0],[1],[1],[1]]
const outputTensor = tf.tensor(output)

//model
const model = tf.sequential();
model.add(
    //jeden neuron jedna warstwa
    tf.layers.dense({inputShape:[2], units:1, activation:'sigmoid'}),
    tf.layers.dense({inputShape:[2], units:6, activation:'softmax'}),
   
)

//optymilizator prowadzi do minimalizacji strat poprzez obliczanie wag. uczenie sie z szybkoscia 0,1 opadajacy gradient
//okresla straty medize wejsciem a oczekiwanymn wybukiem 
model.compile({
    optimizer:tf.train.sgd(0.2),
    loss:'meanSquaredError',
    
})
//trenowanie

 await model.fit(inputTensor, outputTensor, {
        epochs:1000,
        shufle:true,

        })




const output1 = model.predict(tf.tensor([[1,1]]));
console.log(output1.print())


const surface = {name: 'Values Distribution', tab: 'Model Inspection'};
await tfvis.show.valuesDistribution(surface, output1);

    document.getElementById("xor").innerHTML = "test" 
}