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

const MiddleColumn = document.querySelector('.MiddleColumn')

const charSectionElement = document.createElement('div')
charSectionElement.classList.add('Chat-section')

const middleHeaderElement = document.createElement('div')
middleHeaderElement.classList.add('MiddleHeader')

const MiddleHeaderUserInfoElement = document.createElement('div')
MiddleHeaderUserInfoElement.classList.add('MiddleHeader-user-info')

const userImgDivElement = document.createElement('div')
userImgDivElement.classList.add('user-img')

const userImgElement = document.createElement('img')


const userNameDivElement = document.createElement('div')
userNameDivElement.classList.add('user-name')

const userInfo1Element = document.createElement('div')
userInfo1Element.classList.add('user-info1')

const userNameElement = document.createElement('h3')

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

const messageChatElement = document.createElement('div')
messageChatElement.classList.add('messages-chat')

const chatElement = document.createElement('div')
chatElement.classList.add('chat')

const scrollMessageContainerElement = document.createElement('div')
scrollMessageContainerElement.classList.add('scroll-message-container')







const messageFooterElement = document.createElement('div')
messageFooterElement.classList.add('message-footer')
messageFooterElement.classList.add('container-message')

const messageInputWrapperElement = document.createElement('div')
messageInputWrapperElement.classList.add('message-input-wrapper')

const sendMessageFormElement = document.createElement('form')
sendMessageFormElement.classList.add('send-message-form')

const smilesIconImgElement = document.createElement('img')
smilesIconImgElement.classList.add('smile-icon')
smilesIconImgElement.src = 'https://img.icons8.com/windows/32/828282/happy--v1.png'

const messageInputElement = document.createElement('input')
messageInputElement.classList.add('message')
messageInputElement.setAttribute('type', 'text')
messageInputElement.setAttribute('name', 'message')
messageInputElement.setAttribute('id', 'message')
messageInputElement.setAttribute('placeholder', 'Message...')
messageInputElement.setAttribute('autocomplete', 'off')

const linkIconImgElement = document.createElement('img')
linkIconImgElement.classList.add('link-file')
linkIconImgElement.src = 'https://img.icons8.com/metro/30/828282/link.png'


const sendMessageBtnElement = document.createElement('button')
sendMessageBtnElement.classList.add('send-btn')
sendMessageBtnElement.setAttribute('type', 'submit')

const sendMessageIconElement = document.createElement('img')
sendMessageIconElement.classList.add('send-message-icon')
sendMessageIconElement.src = 'https://img.icons8.com/ios-glyphs/30/8378db/filled-sent.png'



MiddleColumn.appendChild(charSectionElement)
charSectionElement.appendChild(middleHeaderElement)
charSectionElement.appendChild(messageChatElement)
middleHeaderElement.appendChild(MiddleHeaderUserInfoElement)

middleHeaderElement.appendChild(headerToolsElement)

MiddleHeaderUserInfoElement.appendChild(userImgDivElement)
MiddleHeaderUserInfoElement.appendChild(userNameDivElement)
userImgDivElement.appendChild(userImgElement)

userNameDivElement.appendChild(userInfo1Element)
userInfo1Element.appendChild(userNameElement)

userInfo1Element.appendChild(statusDivElement)
statusDivElement.appendChild(statusSpanElement)

headerToolsElement.appendChild(headerActionsElement)
headerActionsElement.appendChild(searchBtnElement)
headerActionsElement.appendChild(settingBtnElement)

messageChatElement.appendChild(chatElement)
messageChatElement.appendChild(messageFooterElement)
chatElement.appendChild(scrollMessageContainerElement)


messageFooterElement.appendChild(messageInputWrapperElement)
messageInputWrapperElement.appendChild(sendMessageFormElement)
sendMessageFormElement.appendChild(smilesIconImgElement)
sendMessageFormElement.appendChild(messageInputElement)
sendMessageFormElement.appendChild(linkIconImgElement)
sendMessageFormElement.appendChild(sendMessageBtnElement)
sendMessageBtnElement.appendChild(sendMessageIconElement)


const chatClickBtnElement = document.querySelectorAll('.chat-item')
charSectionElement.style.display = 'none'

chatClickBtnElement.forEach(chatItem => {
    chatItem.addEventListener('click', e => {
        let key = chatItem.getAttribute('key')
        let user = users.filter(user => key == user.id)[0]
        for (let i = 1; i <= users.length; i++) {
            if (i != key) {

            }
        }

        userImgElement.src = user.profil
        userNameElement.textContent = user.name
        console.log(user.id);
        if (key == 1) {
            const containerMessageElement = document.createElement('div')
            containerMessageElement.classList.add('container-message')

            const messageYouElement = document.createElement('div')
            messageYouElement.classList.add('message-orange')

            const messageContentElement = document.createElement('p')
            messageContentElement.classList.add('message-content')
            messageContentElement.textContent = 'Assalomu alaykum yaxshimisiz'

            const messageTimestampTightElement = document.createElement('div')
            messageTimestampTightElement.classList.add('message-timestamp-right')
            messageTimestampTightElement.textContent = '14:32'


            const messageMeElement = document.createElement('div')
            messageMeElement.classList.add('message-blue')

            const messageMeContentElement = document.createElement('p')
            messageMeContentElement.classList.add('message-content')
            messageMeContentElement.textContent = 'Assalomu alaykum yaxshimisiz'

            const messageMeTimestampTightElement = document.createElement('div')
            messageMeTimestampTightElement.classList.add('message-timestamp-left')
            messageMeTimestampTightElement.textContent = '14:32'

            scrollMessageContainerElement.appendChild(containerMessageElement)
            scrollMessageContainerElement.appendChild(containerMessageElement)

            containerMessageElement.appendChild(messageYouElement)
            containerMessageElement.appendChild(messageMeElement)

            messageYouElement.appendChild(messageContentElement)
            messageYouElement.appendChild(messageTimestampTightElement)


            messageMeElement.appendChild(messageMeContentElement)
            messageMeElement.appendChild(messageMeTimestampTightElement)
        }






        charSectionElement.style.display = 'block'
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                charSectionElement.style.display = 'none'
            }
        });
    })
});