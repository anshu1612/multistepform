let userdata= {
    userName:'',
    enrollment: '',
    city:'',
    pincode:'',
    college:'',
    percentage:'',
}
let current = 0;

const sections = document.querySelectorAll('section');

const nxt1 = document.getElementById('nxtBtn1');
    nxt1.addEventListener('click', () => {
      userdata.userName=document.getElementById("user").value;
      userdata.enrollment=document.getElementById("enrollment").value;
      sections[current].classList.add('hidden');    
        current = (current + 1)%sections.length;
      
      sections[current].classList.remove('hidden');
    });

const nxt2 = document.getElementById('nxtBtn2');
    nxt2.addEventListener('click', () => {
        userdata.city=document.getElementById("city").value;
        userdata.pincode=document.getElementById("pincode").value;
      sections[current].classList.add('hidden');    
        current = (current + 1)%sections.length;
    
      sections[current].classList.remove('hidden');
    });

const nxt3=document.getElementById("nxtBtn3");
nxt3.addEventListener('click',()=>{
  userdata.college=document.getElementById("college").value;
  userdata.percentage=document.getElementById("percentage").value;
    sections[current].classList.add('hidden')
    current=(current+1)%sections.length;
    sections[current].classList.remove('hidden')
    document.getElementById("prevUser").textContent=userdata.userName;
    document.getElementById('prevEnrollment').textContent = userdata.enrollment;
  document.getElementById('prevCity').textContent = userdata.city ;
  document.getElementById('prevPincode').textContent = userdata.pincode ;
  document.getElementById('prevCollege').textContent = userdata.college;
  document.getElementById('prevPercentage').textContent = userdata.percentage ;
})

const prev1=document.getElementById("prevBtn1");
    prev1.addEventListener("click",()=>{
        sections[current].classList.add('hidden')
        current=(current-1+sections.length)%sections.length;
        sections[current].classList.remove('hidden');
    })

const prev2=document.getElementById("prevBtn2");
prev2.addEventListener('click',()=>{
    sections[current].classList.add('hidden');
    current=(current-1+sections.length)%sections.length;
    sections[current].classList.remove('hidden');
})

const prev3=document.getElementById("prevBtn3")
prev3.addEventListener('click',()=>{
  sections[current].classList.add('hidden');
  current=(current-1+sections.length)%sections.length;
  sections[current].classList.remove('hidden');
})

document.getElementById('downloadBtn').addEventListener('click', async function () {
  const section = document.getElementById('section4'); // Select Section 4


  const clone = section.cloneNode(true);

  
  const buttons = clone.querySelectorAll('button');
  buttons.forEach((btn) => btn.remove());

  const tempDiv = document.createElement('div');
  tempDiv.style.position = 'absolute';
  tempDiv.style.left = '-9999px';
  tempDiv.appendChild(clone);
  document.body.appendChild(tempDiv);

  
  const { jsPDF } = window.jspdf; 
  const pdf = new jsPDF();

  const canvas = await html2canvas(clone); 
  const imgData = canvas.toDataURL('image/png');

  
  const pageWidth = pdf.internal.pageSize.getWidth();
  const imgWidth = canvas.width > pageWidth ? pageWidth : canvas.width;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  pdf.save('preview.pdf'); 

  document.body.removeChild(tempDiv);
});



