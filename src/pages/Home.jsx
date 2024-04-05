import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox } from 'react-icons/md'

const Home = () => {
  const [Books, setBooks] = useState([])
  const [Loading, SetLoading] = useState(false)
  useEffect(() => {
    SetLoading(true)
    axios
      .get('http://localhost:3000/books')
      .then(res => {
        console.log('Data received')
        setBooks(res.data.data)
        SetLoading(false)
      })
      .catch(err => {
        console.error(err)
        alert(err)
        SetLoading(false)
      })
  }, [])

  return (
    <div className='p-4'>
      <div className='flex justify-between item-center'>
        <h1 className='text-3xl font-bold'>Book List</h1>
        <Link
          to={`/books/create`}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          <MdOutlineAddBox className='text-white text-4xl' />
        </Link>
      </div>
      {Loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">Publish year</th>
              <th className="border border-slate-600 rounded-md">Actions</th>
            </tr>
          </thead>
        </table>
      )}
    </div>
  )
}

export default Home
