import React from 'react';

function FooterCard({ data }) {
  const { title, links } = data; 
  
  return (
    <div className='flex-col p-4'>
      <h1 className='text-xs text-gray-600 font-bold'>{title}</h1>
      <ul className='pt-2'>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className='text-gray-600 text-sm hover:text-mediumPurple transition duration-300'>
              {link.item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCard;
