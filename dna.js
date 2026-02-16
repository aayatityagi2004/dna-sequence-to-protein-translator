const codonTable = {
  "UUU": "F", "UUC": "F",
  "UUA": "L", "UUG": "L",
  "CUU": "L", "CUC": "L", "CUA": "L", "CUG": "L",
  "AUU": "I", "AUC": "I", "AUA": "I",
  "AUG": "M", // start
  "GUU": "V", "GUC": "V", "GUA": "V", "GUG": "V",

  "UCU": "S", "UCC": "S", "UCA": "S", "UCG": "S",
  "CCU": "P", "CCC": "P", "CCA": "P", "CCG": "P",
  "ACU": "T", "ACC": "T", "ACA": "T", "ACG": "T",
  "GCU": "A", "GCC": "A", "GCA": "A", "GCG": "A",

  "UAU": "Y", "UAC": "Y",
  "UAA": "Stop", "UAG": "Stop", "UGA": "Stop",
  "CAU": "H", "CAC": "H",
  "CAA": "Q", "CAG": "Q",

  "AAU": "N", "AAC": "N",
  "AAA": "K", "AAG": "K",
  "GAU": "D", "GAC": "D",
  "GAA": "E", "GAG": "E",

  "UGU": "C", "UGC": "C",
  "UGG": "W",

  "CGU": "R", "CGC": "R", "CGA": "R", "CGG": "R",
  "AGU": "S", "AGC": "S",
  "AGA": "R", "AGG": "R",

  "GGU": "G", "GGC": "G", "GGA": "G", "GGG": "G"
};

const result = document.querySelector("#result");
const convert = document.querySelector("#CONVERT");
convert.addEventListener('click', ()=>  {
    let DNAsequence = [];
    DNAsequence = document.getElementById("dnaInput").value.toUpperCase();
    let mRNAsequence = [];
    if (DNAsequence.length % 3 !== 0) {
    result.innerText='DNA sequence length is invalid. It must be a multiple of 3.'
    return;
}else{ 
      for(let i =0; i<DNAsequence.length; i++){
        if(!["A", "T", "G", "C"].includes(DNAsequence[i])){
        result.innerText = `Invalid dna sequence input.`
        return;
        }else if(DNAsequence[i]==="T"){
            mRNAsequence[i]="U";
    }else{
        mRNAsequence[i]=DNAsequence[i];
    }
} 
     }

let PROTEINsequence = [];
for(let i=0; i<mRNAsequence.length; i+=3){
    const codon=mRNAsequence.slice(i,i+3).join("");
    if (codon.length<3){
        break;
    }
    const aminoAcid=codonTable[codon];
    if(!aminoAcid){
        result.innerText=`invalid input sequence`;
        return;
    }else if (aminoAcid==="Stop"){
       break;
    }
    PROTEINsequence.push(aminoAcid);
    }
    result.innerText=`The mRNA sequence is: ${mRNAsequence}\nThe protein sequence is: ${PROTEINsequence}`;
}
);


