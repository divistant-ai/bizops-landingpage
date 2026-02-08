
import sys

def check_structure(filename):
    with open(filename, 'r') as f:
        lines = f.readlines()

    stack = []
    industries_data_open_line = -1
    
    for i, line in enumerate(lines):
        line_num = i + 1
        stripped = line.strip()
        
        # Track opening of industriesData
        if 'export const industriesData' in line:
            industries_data_open_line = line_num
            print(f"industriesData starts at line {line_num}")

        for char in line:
            if char == '{':
                stack.append(line_num)
            elif char == '}':
                if not stack:
                    print(f"Error: Unexpected closing brace at line {line_num}")
                    return
                open_line = stack.pop()
                
                # Check if we just closed industriesData
                if industries_data_open_line != -1 and not stack:
                    print(f"industriesData CLOSED at line {line_num}")
                    # If we close it, but there is more content (like enterprise: {), that's the bug.
                    # We continue loop to see if more content follows.

    if stack:
        print(f"Error: Unclosed braces starting at lines: {stack}")
    else:
        print("File structure seems balanced (top-level wise).")

check_structure(sys.argv[1])
