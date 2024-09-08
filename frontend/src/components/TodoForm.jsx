import { useForm } from "react-hook-form";
import { createTodo } from "../services/api.js";

export const TodoForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await createTodo(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Enter a new todo"
                    {...register("title", { required: true })}
                />
                {errors.title && (<span>This field is required</span>)}
            </div>
            <button type="submit">Add</button>
        </form>
    );

};