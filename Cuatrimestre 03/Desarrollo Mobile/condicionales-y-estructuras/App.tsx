import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type Task = { id: string; title: string;
  completed: boolean };
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleTask = (id: string) => {
          setTasks((prev) => prev.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  };
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Mis tareas</Text>
        <View style={styles.container}>
          <Button
              title="Agregar una tarea pendiente"
              onPress={() =>
                  setTasks((prev) => [
                    ...prev,
                    { id: Date.now().toString(), title: "Nueva tarea",
                      completed: false },
                  ])
              }
          />
          <Button title="Vaciar" onPress={() => setTasks([])} />
        </View>
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleTask(item.id)}>
                <Text
                    style={{
                      paddingVertical: 8,
                      textDecorationLine: item.completed ? "line-through" : "none",}}>{item.title}
                </Text>
            </TouchableOpacity>
        )}
            ListEmptyComponent={
              <Text style={{ marginTop: 18
              }}>No hay tareas todavía</Text>
            }
            contentContainerStyle={{
              paddingBottom: 24 }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
      container: { flex: 2, padding: 16, paddingTop: 32, backgroundColor: "white", marginTop: 16 },
      title: { fontSize: 20, fontWeight: "300", marginBottom: 24 },
  });

  export default App;