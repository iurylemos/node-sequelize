module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "dbuser",
  password: "dbpass",
  database: "tech",
  port: 15432,
  define: {
    timestamps: true,
    underscored: true,
  },
};

// timestamps > created_at, updated_at
// underscored > pascal case > snack case
