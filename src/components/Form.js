import { useForm } from 'react-hook-form';

function FormHook() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div>
                <label htmlFor="firstname">first Name</label>
                <input {...register('firstName')} />
            </div>
            <div>
                <label htmlFor="Lastname">Last Name</label>
                <input {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
            </div>
            <div>
                <label htmlFor="age">age</label>
                <input {...register('age', { pattern: /\d+/ , required: true })} />
                {errors.age && <p>Please enter number for age.</p>}
            </div>
            <input type="submit" />
        </form>
    );
}

export default FormHook;