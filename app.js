import { FullFormData } from './data.js'


const DeleteText = document.getElementById('DeleteText')
const DefineInput = document.getElementById('DefineInput')
const SearchTextData = document.getElementById('SearchTextData')
const SearchBtn = document.getElementById('SearchBtn')
const EditType = document.getElementById('EditType')
const SelectTypeData = document.getElementById('SelectTypeData')
const FormItem = document.getElementById('FormItem')
const CreateNew = document.getElementById('CreateNew')
const sidebar = document.getElementById('sidebar')
const openMenubar = document.getElementById('openMenubar')
const openMenubarInterface = openMenubar.querySelector('i')

const overly = document.getElementById('overly')
const HideSidebar = document.getElementById('HideSidebar')
const HideNewDataAddContainer= document.getElementById('HideNewDataAddContainer')

const DisplayItemContent = document.getElementById('DisplayItemContent')
let SFDisplay = document.getElementById('SFDisplay')
const backToHome = document.getElementById('backToHome')
const SearchContent = document.getElementById('SearchContent')
const AddNewDataBtn = document.getElementById('AddNewDataBtn')
const AddNewBtnT = document.getElementById('AddNewBtnT')

const overlyOther = document.getElementById('overlyOther')
// INPUTS ACTIONS 
SearchTextData.addEventListener('input', () => {
    SearchContent.innerHTML = ''
    let SearchTextDataValue = SearchTextData.value.trim().toLowerCase()
    if (SearchTextDataValue === '') {
         SearchContent.innerHTML = ''
        SearchTextDataValueEmpty()
    } else {
        DeleteText.classList.add('show')
        DefineInput.style.opacity = '0'
        FormItem.classList.add('hide')
        DisplayItemContent.classList.remove('show')
        SearchContent.style.display = 'block'
    }
        FullFormData.forEach(item => {
    item.DataFF.forEach(data => {
        if (data.sortF.toLowerCase().includes(SearchTextDataValue)) {
             let CreateData = document.createElement('p')
             CreateData.innerHTML = `
             <span class="DataTypeData">${item.type}</span>
           <span class="SortForm">${data.sortF.toUpperCase()}</span> 
           <span class="hrManual"></span>
           <span class="FullForm">${data.fullF}</span>`
           SearchContent.appendChild(CreateData)
        } 
    })
})

 if (!SearchContent.innerHTML) {
   SearchContent.innerHTML = 'Not Found ! &nbsp;<i class="fa-regular fa-circle-xmark"></i>'
   SearchContent.style.textAlign = 'center'
   SearchContent.style.color = 'red'
   SearchContent.style.fontSize = '.8rem'
 } else {
   SearchContent.style.textAlign = ''
   SearchContent.style.color = 'black'
   SearchContent.style.fontSize = ''
 }
    
})

function SearchTextDataValueEmpty() {
        DeleteText.classList.remove('show')
        DefineInput.style.opacity = '1'
        FormItem.classList.remove('hide')
        DisplayItemContent.classList.remove('show')
        SearchContent.style.display = 'none'
}

function DeleteTextIninput() {
    SearchTextData.value = ''
    DeleteText.classList.remove('show')
    DefineInput.style.opacity = '1'
      SearchTextDataValueEmpty()
}
DeleteText.addEventListener('click', () => {
    DeleteTextIninput()
})
document.body.addEventListener('keydown', function (event) {
   if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k' ) {
    SearchTextData.focus()
   }
   console.log(event.key)
}) 
function SidebarToggle() {
    sidebar.classList.toggle('active')
    if ( sidebar.classList.contains('active')) {
       openMenubarInterface.classList.add('fa-xmark')
       openMenubarInterface.classList.remove('fa-bars')
       HideSidebar.classList.add('active')
       setTimeout(() => {
        HideSidebar.style.opacity = '1'
        HideSidebar.style.transition = 'opacity .3s, background .3s'
       }, 200)
       AddOverly()
    } else {
       openMenubarInterface.classList.remove('fa-xmark')
       openMenubarInterface.classList.add('fa-bars')  
       RemoveOverly()  
        HideSidebar.classList.remove('active')
        setTimeout(() => {
        HideSidebar.style.opacity = '0'
        HideSidebar.style.transition = 'opacity .3s, background .3s'
       }, 200)
    }
}
openMenubar.addEventListener('click', () => {
    SidebarToggle()
})
function overlyClicks() {
    SidebarToggle()
    overly.classList.remove('active')
}
overly.addEventListener('click', () => {
    overlyClicks()

})
function AddOverly() {
     overly.classList.add('active')
}
function RemoveOverly() {
     overly.classList.remove('active')
}

FullFormData.forEach(item => {
    let createBtn = document.createElement('button')
    createBtn.innerHTML = `<span class="DataFFLengths ${item.DataFF.length > 20 ? 'IsBigCon' : ''}">${item.DataFF.length}&nbsp;&nbsp;<i class="fa-solid fa-right-left"></i></span><span class="TypeIcon">${item.typeIcon}</span class="Type">${item.type}<span></span>`
    FormItem.appendChild(createBtn)

    createBtn.addEventListener('click', () => {
        SFDisplay.innerHTML = ''
        item.DataFF.forEach(data => {
           let CreateData = document.createElement('p')
           CreateData.innerHTML = `
           <span class="SortForm">${data.sortF}</span> 
           <span class="hrManual"></span>
           <span class="FullForm">${data.fullF}</span>`
           SFDisplay.appendChild(CreateData)

           FormItem.classList.add('hide')
           DisplayItemContent.classList.add('show')
        })
})
})
HideSidebar.addEventListener('click', () => {
    SidebarToggle()
})
function BackToHomeFunc() {
           FormItem.classList.remove('hide')
           DisplayItemContent.classList.remove('show')
}
backToHome.addEventListener('click', () => {
    BackToHomeFunc()
})

function CreateNewData() {
   AddOverlyTwo()
        openMenubarInterface.classList.remove('fa-xmark')
       openMenubarInterface.classList.add('fa-bars')  
       RemoveOverly()  
        HideSidebar.classList.remove('active')
            sidebar.classList.remove('active')
   CreateNew.classList.add('show')
}
EditType.addEventListener('click', CreateNewData)
AddNewDataBtn.addEventListener('click', () => {
    CreateNewData()
})

AddNewBtnT.addEventListener('click', () => {
    CreateNewData()
})
function AddOverlyTwo() {
    overlyOther.classList.add('active')
}
function RemoveOverlyTwo() {
    overlyOther.classList.remove('active')
}
function OverlyTwoClickEv() {
    RemoveOverlyTwo()
    CreateNew.classList.remove('show')
}
overlyOther.addEventListener('click', () => {
    OverlyTwoClickEv()
})
function HideCreateNewCon() {
    RemoveOverlyTwo()
    CreateNew.classList.remove('show')
}
HideNewDataAddContainer.addEventListener('click', () => {
    HideCreateNewCon()
})
SearchBtn.addEventListener('click', () => {
    SearchTextData.focus()
    
})