<div className="w-full h-screen flex flex-col gap-5 justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200">
  <h1 className="text-3xl font-bold text-gray-800">
    {editMode ? "Edit Form" : "Add Form"}
  </h1>
  <form
    onSubmit={handleOnSubmit}
    onReset={handleReset}
    className="flex flex-col gap-6 p-6 bg-white shadow-lg rounded-lg w-full max-w-md"
  >
    <input
      type="text"
      name="userName"
      placeholder="Enter a name"
      value={formData.userName}
      onChange={handleOnChange}
      className="px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Enter an email"
      value={formData.email}
      onChange={handleOnChange}
      className="px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Enter a password"
      value={formData.password}
      onChange={handleOnChange}
      className="px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
      required
    />
    <input
      type="number"
      name="mobileNumber"
      placeholder="Enter a mobile number"
      value={formData.mobileNumber}
      onChange={handleOnChange}
      className="px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
      required
    />
    <button
      type="submit"
      className="px-4 py-3 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition-all duration-300"
    >
      {editMode ? "Update" : "Submit"}
    </button>
    <button
      type="reset"
      className="px-4 py-3 rounded-lg bg-gray-300 text-gray-800 font-semibold shadow-md hover:bg-gray-400 transition-all duration-300"
    >
      Reset
    </button>
  </form>
</div>
