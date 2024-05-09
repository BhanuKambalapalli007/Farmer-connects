import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './Pcomponent.css';
import News from './Products';

function Home() {
  const navigate=useNavigate();
  let [articles,setArticles]=useState([]);
  let  [category,setCategory] = useState([]);
  //const [modal, setModal] = useState(false)
  //const [text, setText] = useState('')
  // const [formData, setFormData] = useState({
  //   name: '',
  //   image: '',
  //   telugu:'',
  //   type:''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch('http://localhost:3000/Crops', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //     // Optionally, you can reset the form fields after successful submission
  //     setFormData({
  //       name: '',
  //       image: '',
  //       telugu:'',
  //       type:''
  //       // Reset other fields as needed
  //     });
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // };

  
  useEffect(()=>{
        const getData = async()=> {
          const response  = await fetch('http://localhost:3000/Crops')
          const json = await response.json()
          console.log(json)

          setArticles(json)
          setCategory(json)
        }
        getData()
},[])
 const filter=(event)=>{
     setCategory(articles.filter(f=>f.name.toLowerCase().includes(event.target.value)))
 }
    return (
    <div className="App">
      <header className='header'>
        <h1 className='header1'>Root To Retail</h1>
        <input type='text' onChange={filter} placeholder='search'/>

      </header>
     
      <section className='news-articles'>
      {
        category.map(article=><News article={article}/>)
      }
      <button className='news' onClick={()=> navigate('/modal')}> Upload</button>
      {/* {modal && <form onSubmit={handleSubmit} className='form'>
      <label>
        Name:
        <input 
        style={{width:"200px"}}
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </label>
      <label>
        Image link:
        <input 
        style={{width:"200px"}}
          type="text" 
          name="image" 
          value={formData.image} 
          onChange={handleChange} 
          required 
        />
      </label>
      
      <label>
        Telugu name:
        <input 
        style={{width:"200px"}}
          type="text" 
          name="telugu" 
          value={formData.telugu} 
          onChange={handleChange} 
          required 
        />
      </label>
      
      <label>
        Type:
        <input 
         style={{width:"200px"}}
          type="text" 
          name="type" 
          value={formData.type} 
          onChange={handleChange} 
          required 
        />
      </label>
      <div className='btns'>
      <button type="submit" className='btn-1'>Submit</button>
      <button onClick={()=> setModal(false)} className='btn-1'>close</button>
     </div>
    </form>}
       */}
      </section>
     
    </div>
  );
}

export default Home;


// https://newsapi.org/v2/everything?q=bitcoin&apiKey=7f902ce3f24e47beb87dd3bce4e475d5

// https://newsapi.org/v2/everything?q=${category}&from=2023-12-25&apiKey=7f902ce3f24e47beb87dd3bce4e475d5

// import React, { useState } from 'react';

// function App() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   image: '',
  //   telugu:'',
  //   type:''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch('http://localhost:3000/Crops', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //     // Optionally, you can reset the form fields after successful submission
  //     setFormData({
  //       name: '',
  //       image: '',
  //       telugu:'',
  //       type:''
  //       // Reset other fields as needed
  //     });
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // };

//   return (
//     <form onSubmit={handleSubmit} className='form'>
//       <label>
//         Name:
//         <input 
//         style={{width:"200px"}}
//           type="text" 
//           name="name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           required 
//         />
//       </label>
//       <label>
//         Image link:
//         <input 
//         style={{width:"200px"}}
//           type="text" 
//           name="image" 
//           value={formData.image} 
//           onChange={handleChange} 
//           required 
//         />
//       </label>
      
//       <label>
//         Telugu name:
//         <input 
//         style={{width:"200px"}}
//           type="text" 
//           name="telugu" 
//           value={formData.telugu} 
//           onChange={handleChange} 
//           required 
//         />
//       </label>
      
//       <label>
//         Type:
//         <input 
//          style={{width:"200px"}}
//           type="text" 
//           name="type" 
//           value={formData.type} 
//           onChange={handleChange} 
//           required 
//         />
//       </label>
//       <div className='btns'>
//       <button type="submit" className='btn-1'>Submit</button>
//       <button onClick={()=> setModal(false)} className='btn-1'>close</button>
//      </div>
//     </form>
// //   );
// // }

// export default App;