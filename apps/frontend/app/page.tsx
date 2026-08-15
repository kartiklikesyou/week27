import {prismaClient} from "db/client";
export const revalidate = 60

export default async function Home(){
  const users = await prismaClient.user.findMany()
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  )
}
