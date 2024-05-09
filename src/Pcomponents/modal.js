 import {useState} from 'react'
export default function Modal(){
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        telugu:'',
        type:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('http://localhost:3000/Crops', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Optionally, you can reset the form fields after successful submission
          setFormData({
            name: '',
            image: '',
            telugu:'',
            type:''
            // Reset other fields as needed
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };
    
    return (
      <div>
        <div>
        <form onSubmit={handleSubmit} className='form'>
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
    {/* <button onClick={()=> setModal(false)} className='btn-1'>close</button> */}
     </div>
    </form>
      
        </div>
      </div>
    )
}