var retrievedObject = localStorage.getItem('users');
users = JSON.parse(retrievedObject)

users.forEach(user => {

    const chatItemsElement = document.querySelector('.chat-items')

    
    const UsersItemElement = document.createElement('div')
    UsersItemElement.classList.add('chat-item')
    UsersItemElement.setAttribute("key", user.id)



    const checkmarkImgElement = document.createElement('img')
    checkmarkImgElement.src = 'assets/img/icons8-checkmark.svg'


    const messageOutgoingStatusElement = document.createElement('div')
    messageOutgoingStatusElement.classList.add('MessageOutgoingStatus')


    const timeElement = document.createElement('span')
    timeElement.classList.add('time')
    timeElement.textContent = '19:21'


    const lastMessageMetaElement = document.createElement('div')
    lastMessageMetaElement.classList.add('LastMessageMeta')


    const nameElement = document.createElement('h3')
    nameElement.textContent = user.name
    const usersInfoElement = document.createElement('div')
    usersInfoElement.classList.add('user-info')

    // 

    const subTitleElement = document.createElement('div')
    subTitleElement.classList.add('subtitle')

    const submessageElement = document.createElement('p')
    submessageElement.classList.add('last-message')
    submessageElement.textContent = 'Assalomu alaykum aka yaxshimisiz'


    const userNameDivElement = document.createElement('div')
    userNameDivElement.classList.add('user-name')


    const userImgDivElement = document.createElement('div')
    userImgDivElement.classList.add('user-img')


    const userImgElement = document.createElement('img')
    userImgElement.src = user.profil



    chatItemsElement.appendChild(UsersItemElement)
    UsersItemElement.appendChild(userImgDivElement)
    UsersItemElement.appendChild(userNameDivElement)
    userImgDivElement.appendChild(userImgElement)
    userNameDivElement.appendChild(usersInfoElement)
    usersInfoElement.appendChild(nameElement)
    usersInfoElement.appendChild(lastMessageMetaElement)
    lastMessageMetaElement.appendChild(messageOutgoingStatusElement)
    messageOutgoingStatusElement.appendChild(checkmarkImgElement)
    lastMessageMetaElement.appendChild(timeElement)
    userNameDivElement.appendChild(subTitleElement)
    subTitleElement.appendChild(submessageElement)
    console.log(UsersItemElement);

});

const chatModalElement = document.querySelector('.Chat-section') //modal chat
const chatClickBtnElement = document.querySelectorAll('.chat-item')

chatClickBtnElement.forEach(chatItem => {
    chatItem.addEventListener('click', e => {
        const charSectionElement = document.createElement('div')
        charSectionElement.classList.add('Chat-section')

        const middleHeaderElement = document.createElement('div')
        middleHeaderElement.classList.add('MiddleHeader')

        const MiddleHeaderUserInfoElement = document.createElement('div')
        MiddleHeaderUserInfoElement.classList.add('MiddleHeader-user-info')

        const userImgDivElement = document.createElement('div')
        userImgDivElement.classList.add('user-img')

        const userImgElement = document.createElement('img')
        userImgElement.src = "assets/img/ilhomjon_use.jpg"

        const userNameDivElement = document.createElement('div')
        userNameDivElement.classList.add('user-name')

        const userInfo1Element = document.createElement('div')
        userInfo1Element.classList.add('user-info1')

        const userNameElement = document.createElement('h3')
        userNameElement.textContent = "Ilhomjon Musayev"

        const statusDivElement = document.createElement('div')
        statusDivElement.classList.add('status')

        const statusSpanElement = document.createElement('div')
        statusSpanElement.classList.add('status-item')
        statusSpanElement.textContent = "last see recently"

        const headerToolsElement = document.createElement('div')
        headerToolsElement.classList.add('header-tools')

        const headerActionsElement = document.createElement('div')
        headerActionsElement.classList.add('HeaderActions')

        const searchBtnElement = document.createElement('button')
        searchBtnElement.classList.add("icon-search")
        searchBtnElement.setAttribute('type', 'button')

        const searchIconElement = document.createElement('img')
        searchIconElement.src = "assets/img/icons8-search.svg"

        const settingBtnElement = document.createElement('button')
        settingBtnElement.setAttribute('type', 'button')

        const settingIconElement = document.createElement('img')
        settingIconElement.src = 'https://img.icons8.com/ios-glyphs/30/817f7f/menu-2.png'
       



        chatModalElement.style.display = 'block'
        
    })
});