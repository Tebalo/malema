// components/JsonRenderer.tsx
import { FC } from 'react';
//import { JsonStructure } from '../types/jsonTypes';

interface JsonStructure{
    [key: string]: string | JsonStructure;
}

interface JsonRendererProps {
  data: JsonStructure;
  depth?: number;
}

const getColorByDepth = (depth: number): string => {
  const colors = ['bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400'];
  return colors[depth % colors.length];
};
const getLabel = (key: string): string => {
  const label: { [key: string]: string } = {"S": "Seele", "NN-T": "Leina+Tlhaodi","VRB":"Lediri"};

  if (key in label) {
    return label[key];
  } else {
    return key;
  }
};
const JsonRenderer: FC<JsonRendererProps> = ({ data, depth = 0 }) => {
    return (
      <div className={`flex md:flex-row flex-col rounded-lg `}>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className='md:flex'>
            {typeof value === 'object' && value !== null ? (
              <div className={`mx-5 my-1 md:my-0 md:mx-1 rounded-lg md:self-end ${getColorByDepth(depth)}`}>
                    <p className='pl-1 text-black font-serif font-semibold'>{getLabel(key)} <JsonRenderer data={value as JsonStructure} depth={depth + 1} /></p>
              </div>
            ) : (
              <div className='mr-1 px-1 md:self-end flex-row'>
                    <div className='font-normal flex-row'>{value}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default JsonRenderer;
