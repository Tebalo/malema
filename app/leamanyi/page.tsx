"use client"
import React, {useState} from 'react'

interface Item{
    text:string;
}

export const Page: React.FC = () =>{
    const [items, setItems] = useState<Item[]>([]); // State for the list of items
    const [inputText, setInputText] = useState(''); // State for the form input

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create a new item using the input text
        const newItem: Item = {
            text: inputText,
        }

        // Append the new item to the list of items
        setItems([...items, newItem]);

        // Clear the form input
        setInputText('');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
            <div className="flex-grow p-4 overflow-y-auto justify-center w-1/2">
                {/* Map through the list and render each item as a paragraph */}
                {items.map((item: Item, index: number)=>(
                    <p key={index} className="mb-3 text-gray-500 dark:text-gray-400">
                        {item.text}
                    </p>
                ))}
            </div>
            <form className="sticky bottom-0 z-10" onSubmit={handleSubmit}>
                <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <textarea 
                    id="chat" 
                    rows={1} 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="block mx-4 p-2.5 w-96 text-sm text-gray-900 bg-white rounded-lg border border-gray-300
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
        </main>
    );
}
export default Page;