// @ts-nocheck
import React, { useCallback, useState } from 'react';
import { Icon, VStack, useColorModeValue, Fab } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';
import TaskList from '../components/task-list';
import shortid from 'shortid';
import Masthead from '../components/masthead';
import NavBar from '../components/navbar';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Bassinet',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Nursery Rocking Chair',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Baby thermometer',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Momcozy Wearable Breast Pump',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Strap-on baby carrier',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Pacifier',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Baby plush blanket',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Silicone milk bottle',
    done: false,
    wrap: true
  },
  {
    id: shortid.generate(),
    subject: 'Baby grooming kit',
    done: false,
    wrap: true
  },
]

export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item: { done: any; id?: string; subject?: string; wrap?: boolean }) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  const handleChangeTaskItemSubject = useCallback((item: { id: string; subject: string; done: boolean; wrap: boolean }, newSubject: any) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])
  const handleFinishEditingTaskItem = useCallback((_item: any) => {
    setEditingItemId(null)
  }, [])
  const handlePressTaskItemLabel = useCallback((item: { id: React.SetStateAction<string | null> }) => {
    setEditingItemId(item.id)
  }, [])
  const handleRemoveItem = useCallback((item: { id: string; subject: string; done: boolean; wrap: boolean }) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
    >
      <Masthead
        title="Nolan's Registry"
        image={require('../assets/baby-masthead.jpg')}
      >
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
//        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  )
}
