'use client'
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Profile from "@components/Profile"

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams()
  const username = searchParams.get('name')
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    const feachPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()
      setUserPosts(data)
    }

    if(params?.id) feachPosts()
  }, [params.id])
  
  return (
    <Profile 
      name={username}
      desc={`Wellcome to ${username}'s personalized profile page. Explore ${username} exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  )
}

export default UserProfile
