from k6_server import mcp

if __name__ == "__main__":
    mcp.run(transport='stdio')
