#!/usr/bin/env python3

import bz2
import glob
import gzip
import os
import os.path
import lzma as xz
import sys
import zipfile


def file_endings(source_dir, ending):
    for f in glob.glob(os.path.join(source_dir, "*")):
        if f.endswith(ending):
            yield f


def compress_single_sets(source_dir):
    for f in file_endings(source_dir, ".json"):
        file_root = os.path.splitext(f)[0]

        # .ZIP
        zip_file_name = file_root + ".json.zip"
        zip_out = zipfile.ZipFile(zip_file_name, "w")
        zip_out.write(
            f, compress_type=zipfile.ZIP_DEFLATED, arcname=os.path.basename(f)
        )
        zip_out.close()

        # .GZ
        gz_file_name = file_root + ".json.gz"
        gz_file_path = os.path.join(source_dir, gz_file_name)
        with open(f, "rb") as f_in, gzip.open(gz_file_path, "wb") as f_out:
            f_out.writelines(f_in)

        # .BZ2
        bz_file_name = file_root + ".json.bz2"
        bz_file_path = os.path.join(source_dir, bz_file_name)
        with open(f, "rb") as f_in, open(bz_file_path, "wb") as f_out:
            f_out.write(bz2.compress(f_in.read(), 9))

        # .XZ
        xz_file_name = file_root + ".json.xz"
        xz_file_path = os.path.join(source_dir, xz_file_name)
        with open(f, "rb") as f_in, open(xz_file_path, "wb") as f_out:
            f_out.write(xz.compress(f_in.read()))

        print("Compressed " + os.path.basename(f))


def compress_all_set_files(source_dir):
    # AllSetFiles
    all_set_files_name = "AllSetFiles"

    # .ZIP
    with zipfile.ZipFile(all_set_files_name + ".zip", "w") as zip_out:
        for f in file_endings(source_dir, ".json"):
            zip_out.write(f, compress_type=zipfile.ZIP_DEFLATED)

    print("Compressed " + all_set_files_name)


def main():
    # Setup into correct directory
    source_dir = os.path.join(os.getcwd(), sys.argv[1])
    os.chdir(source_dir)

    # Compress the system
    compress_all_set_files(".")
    compress_single_sets(".")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: " + sys.argv[0] + " <json_directory>")
        sys.exit()
    main()
