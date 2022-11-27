import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore/lite'

const Home = () => {
  const form = useRef()
  //   const appForm = useRef()

  const submitPortfolio = (e) => {
    e.preventDefault()
    const name = form.current[0]?.value
    const description = form.current[1]?.value
    const url = form.current[2]?.value
    const image = form.current[3]?.files[0]

    const storageRef = ref(storage, `portfolio/${image.name}`)

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              description,
              url,
              image: downloadUrl,
            })
          },
          () => {
            savePortfolio({
              name,
              description,
              url,
              image: null,
            })
          }
        )
      },
      () => {
        savePortfolio({
          name,
          description,
          url,
          image: null,
        })
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    try {
      await addDoc(collection(db, 'portfolio'), portfolio)
      window.location.reload(false)
    } catch (error) {
      alert('Failed to add portfolio')
    }
  }

  //   const submitAppPortfolio = (e) => {
  //     e.preventDefault()
  //     const name = form.current[0]?.value
  //     const description = form.current[1]?.value
  //     const url = form.current[2]?.value
  //     const image = form.current[3]?.files[0]

  //     const storageRef = ref(storage, `app-portfolio/${image.name}`)

  //     uploadBytes(storageRef, image).then(
  //       (snapshot) => {
  //         getDownloadURL(snapshot.ref).then(
  //           (downloadUrl) => {
  //             saveAppPortfolio({
  //               name,
  //               description,
  //               url,
  //               image: downloadUrl,
  //             })
  //           },
  //           () => {
  //             saveAppPortfolio({
  //               name,
  //               description,
  //               url,
  //               image: null,
  //             })
  //           }
  //         )
  //       },
  //       () => {
  //         saveAppPortfolio({
  //           name,
  //           description,
  //           url,
  //           image: null,
  //         })
  //       }
  //     )
  //   }

  //   const saveAppPortfolio = async (portfolio) => {
  //     console.log(portfolio)
  //     try {
  //       await addDoc(collection(db, 'app-portfolio'), portfolio)
  //       window.location.reload(false)
  //     } catch (error) {
  //       alert('Failed to add portfolio')
  //     }
  //   }
  return (
    <div className="dashboard">
      {/* <h2>Web Portfolio</h2> */}
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <input type="textarea" placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Url" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>

        <button onClick={() => auth.signOut}>Sign Out</button>
      </form>
    </div>
  )
}

export default Home

{
  /* <h2>App Portfolio</h2>
      <form ref={appForm} onSubmit={submitAppPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <input type="textarea" placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Url" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br /> */
}
