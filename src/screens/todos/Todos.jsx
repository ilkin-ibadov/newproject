import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import Input from '../login/components/Input'

const Todos = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])

    const addTodo = async () => {
        try {
            const response = await fetch("http://172.20.208.147:5001/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(todo)
            })

            if (response.ok) {
                getTodos()
                setTodo({})
            }
        } catch (error) {
            console.error(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://172.20.208.147:5001/cards/${id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                }
            })

            if (response.ok) {
                getTodos()
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://172.20.208.147:5001/cards")
            const data = await response.json()

            setTodos(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])


    return (
        <View className='h-full p-5 gap-4'>
            <Text className='text-4xl text-black text-center mb-3'>Add todo</Text>

            <Input name="title" setFormData={setTodo} value={todo?.title} placeholder="Enter title" />

            <Input name="description" setFormData={setTodo} value={todo?.description} placeholder="Enter description" />

            <TouchableOpacity onPress={addTodo} className='bg-blue-700 py-6'>
                <Text className='text-center text-white text-xl'>
                    Send
                </Text>
            </TouchableOpacity>

            <FlatList
                ListHeaderComponent={() => <Text className="text-3xl text-black mt-5">Todos</Text>}

                contentContainerStyle={{
                    gap: 16,
                }}
                data={todos}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <View className='p-4 border-[1px] border-zinc-300 rounded-md bg-white shadow shadow-zinc-700'>
                    <Text className='text-black font-bold text-3xl'>{item.title}</Text>
                    <Text className='text-zinc-800 text-xl'>{item.description}</Text>
                    <TouchableOpacity onPress={() => {
                        deleteTodo(item._id)
                    }} className='absolute top-2 right-3 bg-red-600 size-[20px] rounded-md'><Text className='text-center text-white'>X</Text></TouchableOpacity>
                </View>}
                ListEmptyComponent={() => <View className="w-full items-center justify-center pt-[100px]"><Text>No items found</Text></View>}
            />
        </View>
    )
}

export default Todos