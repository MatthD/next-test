/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {useRouter} from 'next/router'
import Link from 'next/link'

const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))


export default ()=> {
  const router = useRouter();
  const {age} = router.query;
  console.log(notes, typeof notes)
  return (
    notes.map((note)=>(
      <Link href='/jojo/[age]' key={note.id} as={`/jojo/${note.id}`}>
        <a sx={{variant: 'container.page'}}>
          <strong>{note.title}</strong>
        </a>
      </Link>
    ))
  )
}
