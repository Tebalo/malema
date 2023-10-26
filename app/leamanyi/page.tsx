"use client"
import React, {useState} from 'react'
import styles from './custom-scrollbar.module.css';


interface Item{
    text:string;
    response:string;
}

export const Page: React.FC = () =>{
    const [items, setItems] = useState<Item[]>([]); // State for the list of items
    const [inputText, setInputText] = useState(''); // State for the form input

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create a new item using the input text
        const newItem: Item = {
            text: inputText,
            response:inputText,
        }
        // Append the new item to the list of items
        setItems([...items, newItem]);

        // Clear the form input
        setInputText('');
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between dark:bg-slate-600"> 
            <div className="flex-grow overflow-y-auto justify-center w-full ${styles.customScrollbar}">
                {/* Map through the list and render each item as a paragraph */}
                {items.map((item: Item, index: number)=>(
                    <div className=''>
                        <div className="bg-slate-200 dark:bg-slate-600 mb-0 flex ">
                            <div className="flex md:px-10 lg:px-96">
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                    </svg>
                                    <span className="sr-only">Upload image</span>
                                </button>
                                <p key={index} className="mb-3 text-gray-500 dark:text-gray-400 p-2">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-200 dark:bg-slate-900 mb-1 flex ">
                            <div className="flex md:px-10 lg:px-96">
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                    </svg>
                                    <span className="sr-only">Upload image</span>
                                </button>
                                <p key={index} className="mb-3 text-gray-500 dark:text-gray-400 p-2">
                                    {item.response}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='bg-gray-100 dark:bg-gray-600 sticky bottom-0 w-full justify-center pb-5 pt-2 mx-72'>
                <form className="z-10 md:px-10 lg:px-96 px-1" onSubmit={handleSubmit}>
                    <label htmlFor="chat" className="sr-only">Your message</label>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <textarea 
                        id="chat" 
                        rows={1} 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300
                        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 relative z-10" 
                        placeholder="Send your message..."
                        ></textarea>
                        <button 
                        type="submit" 
                        className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100
                        dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
                <p className='md:px-10 lg:px-96 px-1'>Free Research Preview. PuoGPT may produce inaccurate information about people, places, or facts. PuoGPT September 25 Version</p>
            </div>
        </main>
    );
}
export default Page;