import { useState } from 'react';
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input 
            placeholder="Add a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="blue">Add</Button>
        </HStack>
        <VStack width="100%" spacing={3}>
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" spacing={3}>
              <Checkbox 
                isChecked={task.completed} 
                onChange={() => toggleTaskCompletion(index)}
              />
              <Text as={task.completed ? 's' : ''} flex="1">
                {task.text}
              </Text>
              <IconButton 
                icon={<FaTrash />} 
                colorScheme="red" 
                onClick={() => deleteTask(index)} 
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;