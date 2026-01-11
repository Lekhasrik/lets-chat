export default function UserLayout({ user, onlineUsersId }) {
  return (
    <div className="relative flex items-center">
      {/* <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" /> */}
      <img
  className="w-10 h-10 rounded-full"
  src={
    user?.photoURL ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.uid}`
  }
  alt=""
/>

      <span className="block ml-2 text-gray-200 dark:text-gray-200 font-medium">
  {user?.displayName || user?.name || user?.username || user?.email}
</span>

      {onlineUsersId?.includes(user?.uid) ? (
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-500 dark:bg-green-400 border-2 border-white rounded-full"></span>
      ) : (
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-gray-400 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
}
