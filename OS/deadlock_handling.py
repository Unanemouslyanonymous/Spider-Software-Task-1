def deadlock_detection(n, available, max_matrix, allocation_matrix):
  #Need Matrix = Max Matrix - Allocation Matrix
    need_matrix = [[max_matrix[i][j] - allocation_matrix[i][j] for j in range(len(max_matrix[0]))] for i in range(len(max_matrix))]
    

    work = available[:]
    finish = [False] * n
    
 
    safe_sequence = []

    # Loop to find all processes that can finish
    while len(safe_sequence) < n:
        found = False
        for i in range(n):
            if not finish[i]:
    
                if all(need_matrix[i][j] <= work[j] for j in range(len(work))):
  
                    for k in range(len(work)):
                        work[k] += allocation_matrix[i][k]
                    safe_sequence.append(i)
                    finish[i] = True
                    found = True

        if not found:
            break

    # Check if the system is in a deadlock state
    if len(safe_sequence) < n:
        print("System is in a deadlock state.")
        return False
    else:
        print("System is in a safe state.")
        print("Safe sequence:", safe_sequence)
        return True


n = 5  # Number of processes
m = 3  # Number of resources


available = [3, 3, 2]  # Available resources
max_matrix = [         # Maximum demand matrix
    [7, 5, 3],
    [3, 2, 2],
    [9, 0, 2],
    [2, 2, 2],
    [4, 3, 3]
]

allocation_matrix = [  # Allocation matrix
    [0, 1, 0],
    [2, 0, 0],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2]
]
deadlock_detection(n, available, max_matrix, allocation_matrix)
