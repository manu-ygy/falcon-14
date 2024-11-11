import { useRouter } from 'next/router'

const MicrositePage = ({ params }) => {
  const { subdomain } = params
  
  return (
    <div>
      <h1>Welcome to {subdomain}'s Microsite</h1>
    </div>
  )
}

export default MicrositePage
