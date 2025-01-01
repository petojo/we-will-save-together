function calculateTotal() {
    const appliance1 = parseFloat(document.getElementById("appliance1").value) || 0;
    const appliance2 = parseFloat(document.getElementById("appliance2").value) || 0;
    const appliance3 = parseFloat(document.getElementById("appliance3").value) || 0;
    const price = parseFloat(document.getElementById("price").value) || 0;

    const total = appliance1 + appliance2 + appliance3;
    const cost = total * price;

    document.getElementById("result").innerHTML = 
        `إجمالي الاستهلاك: ${total} كيلووات/ساعة
        <br> التكلفة الإجمالية: ${cost.toFixed(2)} بالعملة المحلية`;
}