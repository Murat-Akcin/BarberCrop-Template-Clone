import React, { useEffect, useState } from 'react';

const images = [
  { id: '1', imageName: 'g1.jpg', tag: 'haircut' },
  { id: '2', imageName: 'g2.jpg', tag: 'haircut' },
  { id: '3', imageName: 'g3.jpg', tag: 'haircut' },
  { id: '4', imageName: 'g4.jpg', tag: 'beard' },
  { id: '5', imageName: 'g5.jpg', tag: 'mustache' },
  { id: '6', imageName: 'g6.jpg', tag: 'shave' },
];

const Gallery = () => {
  const [tag, setTag] = useState('all');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFiltered(images)
      : setFiltered(images.filter((i) => i.tag === tag));
  }, [tag]);

  return (
    <div className="text-white p-32 ">
      <div className="text-2xl font-bold mb-10">Gallery with our cuts</div>
      <div className="mb-5 font-bold">OPTIONS</div>

      <div handleSetTag={setTag} className="space-x-5  resimlerr font-bold">
        <TagButton handleSetTag={setTag} name="all" />
        <TagButton handleSetTag={setTag} name="haircut" />
        <TagButton handleSetTag={setTag} name="beard" />
        <TagButton handleSetTag={setTag} name="mustache" />
        <TagButton handleSetTag={setTag} name="shave" />

        {filtered.map((i) => (
          <div key={i.id} className="mt-20 flex">
            <img src={`./galleryImage/${i.imageName}`} alt="a" />
          </div>
        ))}
      </div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag }) => {
  return (
    <button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>
  );
};

export default Gallery;
