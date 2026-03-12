const leaders = [
  { name: 'Ava', xp: 4200 },
  { name: 'Noah', xp: 3900 },
  { name: 'You', xp: 0 }
];

export function LeaderboardPage() {
  return (
    <div className="card">
      <h2 className="mb-3 text-xl font-bold">Leaderboard</h2>
      <table className="w-full text-left text-sm"><thead><tr><th>#</th><th>User</th><th>XP</th></tr></thead><tbody>{leaders.map((u, i) => <tr key={u.name}><td>{i + 1}</td><td>{u.name}</td><td>{u.xp}</td></tr>)}</tbody></table>
    </div>
  );
}
