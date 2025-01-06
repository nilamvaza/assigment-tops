// src/components/Crud.js
import React, { useState, useEffect } from "react";
import { db, auth } from "./Firebase-config";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "Firebase/firestore";

const Crud = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setData(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (newItem.trim()) {
      await addDoc(collection(db, "items"), {
        text: newItem,
        createdBy: auth.currentUser.displayName,
      });
      setNewItem("");
      fetchData();
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setEditText(item.text);
  };

  const handleSaveEdit = async () => {
    if (editText.trim()) {
      const itemDoc = doc(db, "items", editItem.id);
      await updateDoc(itemDoc, { text: editText });
      setEditItem(null);
      setEditText("");
      fetchData();
    }
  };

  const handleDelete = async (id) => {
    const itemDoc = doc(db, "items", id);
    await deleteDoc(itemDoc);
    fetchData();
  };

  return (
    <div>
      <h2>CRUD Operations</h2>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>

      <div>
        <h3>Items List</h3>
        {data.map((item) => (
          <div key={item.id}>
            {editItem?.id === item.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditItem(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{item.text}</span>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
