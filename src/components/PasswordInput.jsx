import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({label, input}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col gap-1'
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <label className='text-sm text-white'>{label}</label>
      <input 
        type={showPassword ? 'text' : 'password'} 
        placeholder={input} 
        className='w-full px-4 py-2 border border-zinc-700 rounded-3xl text-sm text-white'
      />
      <button 
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        // style={{background:'transparent', color:'white'}}
        style={{ position: 'absolute', right: 10, top: '72%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color:"rgba(231, 227, 252, 0.23)" }}
      >
        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </div>
  );
}
