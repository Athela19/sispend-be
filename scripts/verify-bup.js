// Using built-in fetch in Node 20+

async function verify() {
  const baseUrl = "http://localhost:3000";

  console.log("Verifying BUP APIs...");

  try {
    // 1. Check getAll
    console.log("\nChecking /api/soldier/data/getAll...");
    const getAllRes = await fetch(`${baseUrl}/api/soldier/data/getAll?limit=5`);
    if (!getAllRes.ok) throw new Error(`getAll failed: ${getAllRes.status}`);
    const getAllData = await getAllRes.json();
    console.log("getAll status:", getAllRes.status);
    if (getAllData.data && getAllData.data.length > 0) {
      console.log("First soldier status_bup:", getAllData.data[0].status_bup);
      if (getAllData.data[0].status_bup) {
        console.log("✅ getAll has status_bup");
      } else {
        console.log("❌ getAll missing status_bup");
      }
    } else {
      console.log("⚠️ No data in getAll to verify");
    }

    // 2. Check bup/list
    console.log("\nChecking /api/soldier/bup/list...");
    const listRes = await fetch(`${baseUrl}/api/soldier/bup/list`);
    if (!listRes.ok) throw new Error(`list failed: ${listRes.status}`);
    const listData = await listRes.json();
    console.log("list status:", listRes.status);
    console.log(
      "Retired officers count:",
      listData.data ? listData.data.length : 0
    );
    if (listData.data) {
      console.log("✅ bup/list returned data");
    }

    // 3. Check bup/count
    console.log("\nChecking /api/soldier/bup/count...");
    const countRes = await fetch(`${baseUrl}/api/soldier/bup/count`);
    if (!countRes.ok) throw new Error(`count failed: ${countRes.status}`);
    const countData = await countRes.json();
    console.log("count status:", countRes.status);
    console.log("Counts:", countData);
    if (
      typeof countData.sudah_bup === "number" &&
      typeof countData.belum_bup === "number"
    ) {
      console.log("✅ bup/count returned valid numbers");
    } else {
      console.log("❌ bup/count returned invalid format");
    }
  } catch (error) {
    console.error("Verification failed:", error.message);
    console.log("Make sure the server is running on port 3000");
  }
}

verify();
