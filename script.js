function calculate() {

    const mathsMarks=parseFloat(document.getElementById("maths").value);
    const dsaMarks=parseFloat(document.getElementById("dsa").value);
    const fsdMarks=parseFloat(document.getElementById("fsd").value);
    const mlMarks=parseFloat(document.getElementById("ml").value);
    const rmMarks=parseFloat(document.getElementById("rm").value);
    const maomMarks=parseFloat(document.getElementById("maom").value);

    if (mathsMarks<0||dsaMarks<0||fsdMarks<0||mlMarks<0||rmMarks<0||maomMarks<0){
        alert("Please enter valid positive marks.");
        document.getElementById("total").textContent = "";
        document.getElementById("result").textContent = "";
        return;
    }

    const totalmarks=mathsMarks+dsaMarks+fsdMarks+mlMarks+rmMarks+maomMarks;
    const numSubjects= 6;
 
    const averagePercentage=(totalmarks/(numSubjects));

    document.getElementById("total").textContent=`Total Marks: ${totalmarks}`;
    document.getElementById("result").textContent=`Average Percentage: ${averagePercentage}%`;
}