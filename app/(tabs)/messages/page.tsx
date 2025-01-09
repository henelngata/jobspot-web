import ChatItem from '@/components/ChatItem'
import ChatList from '@/components/ChatList'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const page = () => {
  return (
    <main>
      <SearchBar />
     <ChatList/>
   </main>
  )
}

export default page
