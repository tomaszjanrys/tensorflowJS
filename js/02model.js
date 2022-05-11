async function model(){
const model = tf.sequential()
//pierwsz warsta musi miec shape
model.add(tf.layers.dense({units:10, inputShape:50}))

model.add(tf.layers.dense({units: 4}))
const result = JSON.stringify(model.outputs[0].shape)
document.getElementById("test").innerHTML = "Model run : " + result
}
async function model2(){
    //dane wejsciowe maja roziar 5 bez baht size
    //dane wejsciowe o 5 wymikarach
const input = tf.input({shape:[1]})

//aktywacja relu
const denseLayer_1 = tf.layers.dense({units:10, activation:'relu'})
//aktywacja softmax na warstwie wyjsciowej


const denseLayers_2 = tf.layers.dense({units:4, activation:'softmax'})
/* 
apply() na każdej warstwie w celu podłączenia go do wyjścia innej warstwie. .
*/
const output = denseLayers_2.apply(denseLayer_1.apply(input))

//tworzenie modelu na danych wejsciowy 

const model2 = tf.model({inputs:input, outputs:output})

const result2 = model2.predict(tf.ones([2,1]))



console.log(result2)
document.getElementById("model2").innerHTML = "Model run 2: <br> " + result2 + " s" 

}